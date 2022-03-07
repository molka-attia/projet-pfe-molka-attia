import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/data/data.dart';
import 'package:responsive_admin_dashboard/screens/components/adduserform.dart';

import 'discussion_info_detail.dart';

class Discussions extends StatelessWidget {
    final ScrollController _firstController = ScrollController();
   Discussions({Key? key}) : super(key: key);

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
              Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
          // Add your onPressed code here!
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
                     itemCount: discussionData.length,
                    itemBuilder:(context, index) => DiscussionInfoDetail(info: discussionData[index],),
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
