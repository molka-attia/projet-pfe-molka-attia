import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/models/discussions_info_model.dart';
import 'package:responsive_admin_dashboard/pages/profile_page.dart';
import 'package:responsive_admin_dashboard/screens/components/adduserform.dart';

class DiscussionInfoDetail extends StatelessWidget {
  const DiscussionInfoDetail({Key? key, required this.info}) : super(key: key);

  final DiscussionInfoModel info;

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
          ClipRRect(
            borderRadius: BorderRadius.circular(40),
            child: Image.asset(
              info.imageSrc!,
              height: 42,
              width: 42,
              fit: BoxFit.cover,
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: appPadding),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    info.name!,
                    style: TextStyle(
                      color: textColor,
                      fontWeight: FontWeight.w600
                    ),
                  ),

                  Text(
                    info.date!,
                    style: TextStyle(
                        color: textColor.withOpacity(0.5),
                      fontSize: 13,
                    ),
                  ),
                ],
              ),
            ),
          ),
         // Icon(Icons.more_vert_rounded,color: textColor.withOpacity(0.5),size: 18,
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
                    title: Text('User info'),
                    content: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Form(
                        child: Column(
                          children: <Widget>[
                              ClipRRect(
            borderRadius: BorderRadius.circular(40),
            child: Image.asset(
              info.imageSrc!,
              height: 52,
              width: 52,
              fit: BoxFit.cover,
            ),
          ),
                            Text(
                    info.name!,
                    style: TextStyle(
                      color: textColor,
                      fontWeight: FontWeight.w600
                    ),
                  ),

                  Text(
                    info.date!,
                    style: TextStyle(
                        color: textColor.withOpacity(0.5),
                      fontSize: 13,
                    ),
                  ),
                          ],
                        ),
                      ),
                    ),
                     actions: [
                      // RaisedButton(
                      //     child: Text("edit"),
                          FloatingActionButton.extended(
       
        label: const Text('edit'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.yellow,

      
                          onPressed: () {
                            // your code
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
        label: const Text('delete'),
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
        ))  );
  }
}
