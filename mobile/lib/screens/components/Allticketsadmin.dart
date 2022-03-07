import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/constants/responsive.dart';
import 'package:responsive_admin_dashboard/screens/components/analytic_cards.dart';
import 'package:responsive_admin_dashboard/screens/components/custom_appbar.dart';
import 'package:responsive_admin_dashboard/screens/components/top_referals.dart';
import 'package:responsive_admin_dashboard/screens/components/users.dart';
import 'package:responsive_admin_dashboard/screens/components/users_by_device.dart';
import 'package:responsive_admin_dashboard/screens/components/viewers.dart';

import 'discussions.dart';

class Allticketsadmin extends StatelessWidget {
  const Allticketsadmin({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        padding: EdgeInsets.all(appPadding),

        child: Column(
          children: [
             CustomAppbar(),
             SizedBox(height: 30),
            Container(
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
         // color: secondaryColor,
          color: red.withOpacity(0.1),
           borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "nom du ticket",
                style: TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),  new IconButton(
        icon: new Icon(Icons.more_vert_rounded),
        color: textColor.withOpacity(0.5),
        //size: 18,
        onPressed: (){}),
              // Container(
              //   padding: EdgeInsets.all(appPadding / 2),
              //   height: 40,
              //   width: 40,
              //   decoration: BoxDecoration(
              //       color: red.withOpacity(0.1),
              //       shape: BoxShape.circle),
              
              // )
            ],
          ),
          Text(
            "ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          ),
        SizedBox(height: 30),
          FloatingActionButton.extended(
        onPressed: () {
              // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
          // Add your onPressed code here!
        },
        
        label: const Text('view more'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.red,

      ),
        ],
      ),
    ),
    SizedBox(height: 20),
Container(
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
         // color: secondaryColor,
          color: green.withOpacity(0.1),
           borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "nom du ticket",
                style: TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),
              Container(
                padding: EdgeInsets.all(appPadding / 2),
                height: 40,
                width: 40,
                decoration: BoxDecoration(
                    color: red.withOpacity(0.1),
                    shape: BoxShape.circle),
                // child: SvgPicture.asset(
                //   info.svgSrc!,
                //   color: Colors.blue,
                // ),
              )
            ],
          ),
          Text(
            "ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          ),
        SizedBox(height: 30),
          FloatingActionButton.extended(
        onPressed: () {
              // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
          // Add your onPressed code here!
        },
        
        label: const Text('view more'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.green,

      ),
        ],
      ),
    ),
    SizedBox(height: 20),
    Container(
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
         // color: secondaryColor,
          color: Colors.yellow.withOpacity(0.1),
           borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "nom du ticket",
                style: TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),
              Container(
                padding: EdgeInsets.all(appPadding / 2),
                height: 40,
                width: 40,
                decoration: BoxDecoration(
                    color: red.withOpacity(0.1),
                    shape: BoxShape.circle),
                // child: SvgPicture.asset(
                //   info.svgSrc!,
                //   color: Colors.blue,
                // ),
              )
            ],
          ),
          Text(
            "ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          ),
        SizedBox(height: 30),
          FloatingActionButton.extended(
        onPressed: () {
              // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
          // Add your onPressed code here!
        },
        
        label: const Text('view more'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.blue,

      ),
        ],
      ),
    ) ,SizedBox(height: 20),
Container(
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
         // color: secondaryColor,
          color: red.withOpacity(0.1),
           borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "nom du ticket",
                style: TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),
              Container(
                padding: EdgeInsets.all(appPadding / 2),
                height: 40,
                width: 40,
                decoration: BoxDecoration(
                    color: red.withOpacity(0.1),
                    shape: BoxShape.circle),
                // child: SvgPicture.asset(
                //   info.svgSrc!,
                //   color: Colors.blue,
                // ),
              )
            ],
          ),
          Text(
            "ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          ),
        SizedBox(height: 30),
          FloatingActionButton.extended(
        onPressed: () {
              // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
          // Add your onPressed code here!
        },
        
        label: const Text('view more'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.blue,

      ),
        ],
      ),
    ),
    SizedBox(height: 20),
    Container(
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
         // color: secondaryColor,
          color: red.withOpacity(0.1),
           borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "nom du ticket",
                style: TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),
              Container(
                padding: EdgeInsets.all(appPadding / 2),
                height: 40,
                width: 40,
                decoration: BoxDecoration(
                    color: red.withOpacity(0.1),
                    shape: BoxShape.circle),
                // child: SvgPicture.asset(
                //   info.svgSrc!,
                //   color: Colors.blue,
                // ),
              )
            ],
          ),
          Text(
            "ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          ),
        SizedBox(height: 30),
          FloatingActionButton.extended(
        onPressed: () {
              // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>RegistrationPage() ));
          // Add your onPressed code here!
        },
        
        label: const Text('view more'),
        // icon: const Icon(Icons.plus_one_rounded),
        backgroundColor: Colors.blue,

      ),
        ],
      ),
    )          
             
           
                  
                
               
                   
                 
               
             
           
            

          ],
        ),
      ),
    );
  }
}
