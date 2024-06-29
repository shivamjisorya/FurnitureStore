var mysql = require('mysql2');
var con = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'VSIT'
});


// ==================================================================================================
                                    // select from existing table with database
// ==================================================================================================


con.connect(function (error) {
   if (error) throw error;
   console.log("connected successfully");
});


   //  con.query('SELECT*from STUDENT', function (err, result) {
   //     if (err) throw err;
   //     console.warn("all result here", result);
   // });


// ==================================================================================================
                                    // select from existing table with database
// ==================================================================================================



// ==================================================================================================
                                    // creating new database
// ==================================================================================================


//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");

//     con.query("CREATE DATABASE merabhai", function (err, result) {
//       if (err) throw err;
//       console.log("Database created" + result);
//     });
//   });

// ==================================================================================================
                                    // creating new database
// ==================================================================================================




// ==================================================================================================
                                    // creating new table in database
// ==================================================================================================

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE student (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// ==================================================================================================
                                    // creating new table in database
// ==================================================================================================


// ==================================================================================================
                                    // insert into table
// ==================================================================================================

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customersdetails (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

// ==================================================================================================
                                    // insert into table
// ==================================================================================================


// ==================================================================================================
                                    // select* from table
// ==================================================================================================


// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customersdetails", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// ==================================================================================================
                                    // select* from table
// ==================================================================================================


// ==================================================================================================
                                    // select* from table where
// ==================================================================================================

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customersdetails WHERE address = 'Highway 37'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// =============================intemtionally wrong inserted data================================
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customersdetails WHERE address = 'make 37'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// =============================intemtionally wrong inserted data================================



// ==================================================================================================
                                    // select* from table where
// ==================================================================================================



// ==================================================================================================
                                    // insert into table
// ==================================================================================================

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customersdetails (name, address ) VALUES ('white', 'najafgarh') , ('markers' , 'premnagar') , ('roughness', 'creator')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });

// ==================================================================================================
                                    // insert into table
// ==================================================================================================




// ==================================================================================================
                                    // select* from table where
// ==================================================================================================



// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customersdetails WHERE address = 'premnagar'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ==================================================================================================
                                    // select* from table where
// ==================================================================================================



// ==================================================================================================
                                    // select* from table order by-
// ==================================================================================================

// ===========================order by=========ASC==========================================

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customersdetails ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// ============================order by=========ASC==========================================

// ============================order by=========DESC==========================================


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customersdetails ORDER BY name desc", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ============================order by=========DESC==========================================



// ==================================================================================================
                                    // select* from table order by-
// ==================================================================================================


// ==================================================================================================
                                    // delete from table
// ==================================================================================================




// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customersdetails WHERE address = 'highway 37'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

// ==================================================================================================
                                    // delete from table
// ==================================================================================================


// ==================================================================================================
                                    // select* from table
// ==================================================================================================


// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM customersdetails", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

// ==================================================================================================
                                    // select* from table
// ==================================================================================================



// ==================================================================================================
                                    // dropping full table
// ==================================================================================================

// ===============================not using it ========================================

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE customersdetails";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

// ===============================not using it ========================================



// ==================================================================================================
                                    // dropping full table
// ==================================================================================================




// ==================================================================================================
                                    // update table full
// ==================================================================================================



// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customersdetails SET address = 'vrindavan' where name= 'roughness'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
  
//   });
// });


// ==================================================================================================
                                    // update table full
// ==================================================================================================


// ==================================================================================================
                                    // update table full
// ==================================================================================================


// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customersdetails LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


// ==================================================================================================
                                    // update table full
// ==================================================================================================

