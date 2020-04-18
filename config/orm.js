const connection = require("../config/connection.js");

function placeQuestion(number) {
    let array = [];

    for(let i = 0; i < number; i++){
        array.push("?");
    }
    return array.toString();
}

let orm = {
    all: function(tableInput, cb) {
        let queryTable = "SELECT * FROM" + tableInput + ";";
        connection.query(queryTable, (error, res) => {
            if (error) throw (error);
            cb(res);
        });
    },
    create: function (table, cols, val, cb) {
        let queryTable = "INSERT INTO" + table; 

        queryTable += "(";
        queryTable += cols.toString();
        queryTable += ")";
        queryTable += "VALUES (";
        queryTable += placeQuestion(val.length);
        queryTable += ")";

        console.log(queryTable);

        connection.query(queryTable, val, (error, res) => {
            if (error) throw error
            cb(res);
        });
    },

    update: function (table, dbObjVal, cond, cb){
        let queryTable = "UPDATE" + table;

        queryTable += "SET";
        queryTable += dbObj(dbObjVal);
        queryTable += "WHERE";
        queryTable += cond;

        console.log(queryTable);
        connection.query(queryTable, (error,res)=>{
            if (error) throw error;
            cb(res);
        })
    },

    clear: function (table, cond, cb){
        let queryTable = "DELETE FROM" + table;

        queryTable = queryTable + "WHERE";
        queryTable = queryTable + cond;
        connection.query(queryTable, function (error, res){
            if (error) throw error;
            cb(res);
        });
    }
};

function dbObj(ob){
    let array = [];

    for( let key in ob){
        let value = ob[key];

        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof value === "string" && value.indexOf("")>= 0){
                value = "'"+ value + "'";
            }
            array.push(key + "="+ value);
        }
    }
    return array.toString();

}

module.exports = orm;