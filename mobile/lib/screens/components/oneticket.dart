import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/models/discussions_info_model.dart';
import 'package:responsive_admin_dashboard/pages/profile_page.dart';
import 'package:responsive_admin_dashboard/screens/components/adduserform.dart';
import 'package:responsive_admin_dashboard/AllusersAdmin.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;
import 'package:async/async.dart';
import 'package:image_picker/image_picker.dart';
import 'package:responsive_admin_dashboard/common/theme_helper.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:path/path.dart';
import 'dart:io';
import 'dart:convert';
import 'discussions.dart';

class Oneticket extends StatefulWidget {
  
  final dynamic info;
 Oneticket({this.info});

  @override
  State<Oneticket> createState() => _DiscussionInfoDetailState();
}











 Future<User> futureAlbum;

  // @override
  // void initState() {
  //   //super.initState();
  //   futureAlbum = fetchAlbum();
  // }

class User {
  // final int userId;
  // final int id;
  final String name;

  const User({
    // required this.userId,
    // required this.id,
     this.name,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      // userId: json['userId'],
      // id: json['id'],
      name: json['name'],
    );
  }
}

class _DiscussionInfoDetailState extends State<Oneticket> {
  var techniciens;
  var technicien;
  getTechniciens() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String token = prefs.getString("token");
    String userId = prefs.getString("userId");
    String clubId = prefs.getString("club_id");
    var headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token,
      "userId": userId,
    };
    var url = "http://localhost:3000/api/users/gettechniciens";
    var uri = Uri.parse(url);
    // var request = http.get(uri, headers: headers);
    var request = http.get(uri, headers: headers);
    var response = await request.timeout(Duration(seconds: 10));
    setState(() {
      techniciens = jsonDecode(response.body);
    });
  }
   String selectedValue = '';
List<DropdownMenuItem<String>> get dropdownItems{
  List<DropdownMenuItem<String>> menuItems = [
    DropdownMenuItem(child: Text(''),value:''), 
     for (technicien in techniciens)
   
    DropdownMenuItem(child: Text(technicien['name']),value: technicien['_id']),
   // DropdownMenuItem(child: Text("technicien"),value: "technicien"),
    
  
  ];
  return menuItems;
}
  deleteTicket() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();

    String token = prefs.getString("token");
    String userId = prefs.getString("userId");
    var headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token,
      "userId": userId,
    };
    // 
    // http://localhost:3000/api/tickets/${id}/deleteticket
    var uri = Uri.parse("http://localhost:3000/api/tickets/" +
        widget.info["_id"] +
        "/deleteticket");
   // var request = http.delete(uri, headers: headers);
    var request = http.delete(uri, headers: headers);
    // Navigator.push(
    //     context, MaterialPageRoute(builder: (context) =>AllusersAdmin() ));
  }
  // dynamic user;
  Color _primaryColor = HexColor('#0c297e');
  final ScrollController _firstController = ScrollController();
  var text="ha";
getcolor()  {
if(widget.info['priorite']=='urgent'){
return red;
}
else if(widget.info['priorite']=='moyenne'){
  return Colors.yellow;
}
else {
  return green;
}
}
 Future<User> futureAlbum;
  Future<User> futureAlbum2;

  @override
  void initState() {
    super.initState();
    futureAlbum = fetchUser();
    futureAlbum2=fetchUser2();
    getTechniciens();
  }
Future<User> fetchUser() async {
     SharedPreferences prefs = await SharedPreferences.getInstance();

    String token = prefs.getString("token");
    String userId = prefs.getString("userId");
    var headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token,
      "userId": userId,
    };
  final response = await http
      .get(Uri.parse("http://localhost:3000/api/users/" +
         widget.info["demandeur"] +
         "/getUserName"), headers: headers);

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return User.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to load user');
  }
}
Future<User> fetchUser2() async {
     SharedPreferences prefs = await SharedPreferences.getInstance();

    String token = prefs.getString("token");
    String userId = prefs.getString("userId");
    var headers = {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Bearer " + token,
      "userId": userId,
    };
  final response = await http
      .get(Uri.parse("http://localhost:3000/api/users/" +
         widget.info["assignetech"] +
         "/getUserName"), headers: headers);

  if (response.statusCode == 200) {
    // If the server did return a 200 OK response,
    // then parse the JSON.
    return User.fromJson(jsonDecode(response.body));
  } else {
    // If the server did not return a 200 OK response,
    // then throw an exception.
    throw Exception('Failed to load user');
  }
}

  // getUser() async {
  //   //SharedPreferences prefs = await SharedPreferences.getInstance();

  //   // String token = prefs.getString("token");
  //   // String userId = prefs.getString("userId");
  //   // var headers = {
  //   //   "Content-Type": "application/json",
  //   //   "Accept": "application/json",
  //   //   "Authorization": "Bearer " + token,
  //   //   "userId": userId,
  //   // };
    // var uri = Uri.parse("http://localhost:3000/api/users/" +
    //     widget.info["demandeur"] +
    //     "/getuserName");
  //  // var request = http.delete(uri, headers: headers);
  //   //var request = http.get(uri);
  //   // Navigator.push(
  //   //     context, MaterialPageRoute(builder: (context) =>AllusersAdmin() ));
     
  //   // var request = http.get(uri, headers: headers);
  //   var request = http.get(uri);
  //   var response = await request.timeout(Duration(seconds: 10));
  //   setState(() {
  //     user = jsonDecode(response.body);
  //   });
    
  // }
  

// class DiscussionInfoDetail extends StatelessWidget {
//   const DiscussionInfoDetail({Key? key, required this.info}) : super(key: key);

//   final DiscussionInfoModel info;

 









  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: appPadding),
      padding: EdgeInsets.all(appPadding / 2),
      child: Expanded(
            
          //contains a single child which is scrollable
          child: SingleChildScrollView(
      child: Row(
        children: [
          // ClipRRect(
          //   borderRadius: BorderRadius.circular(40),
          //   child: Image.asset(
          //     'images/'+ widget.info['user_img'],
          //     height: 42,
          //     width: 42,
          //     fit: BoxFit.cover,
          //   ),
          // ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: appPadding),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  //    Text(
                  //    getcolor(),
                  //   style: TextStyle(
                  //     color: textColor,
                  //     fontWeight: FontWeight.w600
                  //   ),

                  // ), 
                  // Text(
                  //    widget.info['description'],
                  //   style: TextStyle(
                  //     color: textColor,
                  //     fontWeight: FontWeight.w600
                  //   ),

                  // ), 
                
        
            //       FutureBuilder<User>(
            // future: futureAlbum,
            // builder: (context, snapshot) {
            //   if (snapshot.hasData) {
            //     return Text(snapshot.data!.title);
            //   } else if (snapshot.hasError) {
            //     return Text('${snapshot.error}');
            //   }

                  //  Text(
                  //  '${user}',
                  //   style: TextStyle(
                  //     color: textColor,
                  //     fontWeight: FontWeight.w600
                  //   ),

                  // ), 
                  //  ListView.builder(
                  //   controller: _firstController,
                  //    itemCount: user.length, 
                  //   itemBuilder:(context, index) =>  user[index],
                  //   // (BuildContext context, int index) {
                  //     // return Padding(
                  //     //   padding: const EdgeInsets.all(8.0),
                  //     //   child: Text('Scrollable 1 : Index $index'),
                  //     // );
                  //  // }
                  //   ),

                  // Text(
                  //  widget.info['priorite'],
                  //   style: TextStyle(
                  //       color: textColor.withOpacity(0.5),
                  //     fontSize: 13,
                  //   ),
                    
                  // ),
                  Container(
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
         // color: secondaryColor,
          color: getcolor().withOpacity(0.1),
           borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
             Text(
                widget.info['etat'],
                style: TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),
               Text(
                widget.info['priorite'],
                style: TextStyle(
                  color: textColor,
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                ),
              ),
               FloatingActionButton.extended(
        onPressed: () {
       deleteTicket();
          // Add your onPressed code here!
        },
        label: const Text('delete'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.red.withOpacity(0.6),

      ),
              // Container(
              //   padding: EdgeInsets.all(appPadding / 2),
              //   height: 40,
              //   width: 40,
              //   decoration: BoxDecoration(
              //       color: getcolor().withOpacity(0.1),
              //       shape: BoxShape.circle),
              //   // child: SvgPicture.asset(
              //   //   info.svgSrc!,
              //   //   color: Colors.blue,
              //   // ),
              // )
                    new IconButton(
        icon: new Icon(Icons.more_vert_rounded),
        color: textColor.withOpacity(0.5),
        //size: 18,
        onPressed: (){
            //Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>ProfilePage() ));
            showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    scrollable: true,
                    title: Text('Ticket info :'),
                    content: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Form(
                        child: Column(
                          children: <Widget>[
          //                     ClipRRect(
          //   borderRadius: BorderRadius.circular(40),
          //   child: Image.asset(
          //     'images/'+ widget.info['user_img'],
          //     height: 52,
          //     width: 52,
          //     fit: BoxFit.cover,
          //   ),
          // ),
                            Text(
                     widget.info['description'],
                    style: TextStyle(
                      color: textColor,
                      fontWeight: FontWeight.w400
                    ),
                  ),
                  //     Text(
                  //   'demandeur:',
                  //   style: TextStyle(
                  //     color: textColor,
                  //     fontWeight: FontWeight.w600
                  //   ),
                  // ),
                  
  FutureBuilder<User>(
            future: futureAlbum,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Text('Demandeur :    '+snapshot.data.name);
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }

              // By default, show a loading spinner.
              return const CircularProgressIndicator();
            },
          ),
          
                  //     Text(
                  //   'technicien :',
                  //   style: TextStyle(
                  //     color: textColor,
                  //     fontWeight: FontWeight.w600
                  //   ),
                  // ),
           FutureBuilder<User>(
            future: futureAlbum2,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Text('Technicien :    '+snapshot.data.name);
              } else if (snapshot.hasError) {
                return Text('${snapshot.error}');
              }

              // By default, show a loading spinner.
              return const CircularProgressIndicator();
            },
          ),
                  // Text(
                  //    widget.info['type'],
                  //   style: TextStyle(
                  //       color: textColor.withOpacity(0.5),
                  //     fontSize: 13,
                  //   ),
                  //  ),
                  //    Text(
                  //    widget.info['email'],
                  //   style: TextStyle(
                  //       color: textColor.withOpacity(0.5),
                  //     fontSize: 13,
                  //   ),
                   //),
                          ],
                        ),
                      ),
                    ),
                     actions: [
                      // RaisedButton(
                      //     child: Text("edit"),
                          FloatingActionButton.extended(
       
        label: const Text('affecter'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: _primaryColor,

      
                          onPressed: () {
                            // your code
                              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    scrollable: true,
                    title: Text('Techniciens :'),
                    content: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Form(
                        child: Column(
                          children: <Widget>[
                            
                            // TextFormField(
                            //   // decoration: InputDecoration(
                            //     labelText: 'Techniciens :',
                            //     icon: Icon(Icons.account_box),
                            //   //),
                            // ),

              //                Text(
              //   'Techniciens:',
              //   style: TextStyle(
              //     color: textColor,
              //     fontSize: 16,
              //     fontWeight: FontWeight.w700,
              //   ),
              // ),
                                                        Container(
                                      width: 450,
                                     // decoration: ThemeHelper().inputBoxDecorationShaddow(),
          padding: EdgeInsets.symmetric(vertical: 5, horizontal: 15),
            //       decoration: BoxDecoration(
            //  // color: Theme.of(context).primaryColorLight,
            //  color: Colors.white,
            //   borderRadius: BorderRadius.circular(30)
              
            //   ),
               decoration: ThemeHelper().inputBoxDecorationShaddow(),
               
                          child:
                           DropdownButton(
      value: selectedValue,
      
      //decoration: ThemeHelper().inputBoxDecorationShaddow(),
      //dropdownColor: Colors.green,
      // isExpanded:true,
      onChanged: (String newValue){
        setState(() {
          selectedValue = newValue;
        });
      },
      items: dropdownItems,
       hint: Center(
                child: Text(
              'role',
              style: TextStyle(color: Colors.white),
            )),
      )),
                           
                          ],
                        ),
                      ),
                    ),
                     actions: [
                   FloatingActionButton.extended(
       
        label: const Text('affecter'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: _primaryColor,
                          onPressed: () {
                            // your code
                            
                          }),
                        
                          
                    ],
                  );
                });
                          }),
                          //   RaisedButton(
                          // child: Text("delete"),
                          // onPressed: () {
                          //   // your code
                          // }),
                             FloatingActionButton.extended(
        onPressed: () {
      
          // Add your onPressed code here!
        },
        label: const Text('cloturer'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.red,

      ),
                          
                    ],
                  );
                });
        }
      ),
            ],
          ),
          Text(
            widget.info['description'],
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          ),
        SizedBox(height: 30),
      //     FloatingActionButton.extended(
      //   onPressed: () {
      //         // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
      //     // Add your onPressed code here!
      //   },
        
      //   label: const Text('view more'),
      //   // icon: const Icon(Icons.plus_one_rounded),
      //   backgroundColor: Colors.blue,

      // ),
        ],
      ),
    ) ,
                  
                ],
              ),
            ),
          ),
         // Icon(Icons.more_vert_rounded,color: textColor.withOpacity(0.5),size: 18,
        
          
        ],
      ),
        ))  );
  }
}
