import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/data/data.dart';
import 'package:responsive_admin_dashboard/screens/components/adduserform.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';

import 'discussion_info_detail.dart';

class Discussions extends StatefulWidget {
  @override
  State<Discussions> createState() => _DashuserState();
}

class _DashuserState extends State<Discussions> {
  GlobalKey<ScaffoldState> _drawerKey = GlobalKey();

  var users;
  getUsers() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    // String token = prefs.getString("token");
    // String userId = prefs.getString("userId");
    // String clubId = prefs.getString("club_id");
    // var headers = {
    //   "Content-Type": "application/json",
    //   "Accept": "application/json",
    //   "Authorization": "Bearer " + token,
    //   "userId": userId,
    // };
    var url = "http://localhost:3000/api/users";
    var uri = Uri.parse(url);
    // var request = http.get(uri, headers: headers);
    var request = http.get(uri);
    var response = await request.timeout(Duration(seconds: 10));
    setState(() {
      users = jsonDecode(response.body);
    });
  }

  @override
  void initState() {
    super.initState();
    getUsers();
  }

    final ScrollController _firstController = ScrollController();
  // Discussions({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 540,
      padding: EdgeInsets.all(appPadding),
      decoration: BoxDecoration(
        color: secondaryColor,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Users',
                style: TextStyle(
                  color: textColor,
                  fontWeight: FontWeight.w700,
                  fontSize: 15,
                ),
              ),
              // Text(
              //   'View All',
              //   style: TextStyle(
              //     color: textColor.withOpacity(0.5),
              //     fontWeight: FontWeight.bold,
              //     fontSize: 13,
              //   ),
              // ),
              FloatingActionButton.extended(
        onPressed: () {
              // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
          // Add your onPressed code here!
           showDialog(
                context: context,
                builder: (BuildContext context) {
                  return AlertDialog(
                    scrollable: true,
                    title: Text('User edit'),
                    content: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Form(
                        child: Column(
                          children: <Widget>[
                            TextFormField(
                              decoration: InputDecoration(
                                labelText: 'Name',
                                icon: Icon(Icons.account_box),
                              ),
                            ),
                            
                            TextFormField(
                              decoration: InputDecoration(
                                labelText: 'Email',
                                icon: Icon(Icons.email),
                              ),
                            ),
                            TextFormField(
                              decoration: InputDecoration(
                                labelText: 'Message',
                                icon: Icon(Icons.message ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                     actions: [
                   FloatingActionButton.extended(
       
        label: const Text('edit'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.yellow,
                          onPressed: () {
                            // your code
                            
                          }),
                        
                          
                    ],
                  );
                });


          
        },
        label: const Text('Ajouter'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.blue,

      ),
            ],
          ),
          SizedBox(
            height: appPadding,
          ),
          Expanded(
            // child: ListView.builder(
            //   // physics: NeverScrollableScrollPhysics(),
            //   physics:AlwaysScrollableScrollPhysics(),
            //   shrinkWrap: true,
            //   itemCount: discussionData.length,
            //   itemBuilder: (context, index) => DiscussionInfoDetail(info: discussionData[index],),
            // ),
               child: Scrollbar(
                isAlwaysShown: true,
                controller: _firstController,
                child: ListView.builder(
                    controller: _firstController,
                     itemCount: users.length, 
                    itemBuilder:(context, index) => DiscussionInfoDetail(info: users[index],),
                    // (BuildContext context, int index) {
                      // return Padding(
                      //   padding: const EdgeInsets.all(8.0),
                      //   child: Text('Scrollable 1 : Index $index'),
                      // );
                   // }
                    ),
              )),
          
        ],
      ),
    );
  }
}
