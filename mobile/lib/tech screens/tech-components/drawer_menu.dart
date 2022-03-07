import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/AllusersAdmin.dart';
// import 'package:responsive_admin_dashboard/screens/components/Allticketsadmin.dart';
import 'package:responsive_admin_dashboard/AllticketsTech.dart';
import 'package:responsive_admin_dashboard/tech screens/tech-components/drawer_list_tile.dart';
import 'package:responsive_admin_dashboard/tech screens/tech_dash_board_screen.dart';
import 'package:responsive_admin_dashboard/pages/login_page.dart';
import 'package:responsive_admin_dashboard/techmainDash.dart';


import 'package:responsive_admin_dashboard/mainDash.dart';

class DrawerMenu extends StatelessWidget {
  const DrawerMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          Container(
            padding: EdgeInsets.all(appPadding),
            height: 100,
            child: Image.asset("assets/images/cartecoloredlogo.png"),
          ),
          DrawerListTile(
              title: 'Dash Board',
              svgSrc: 'assets/icons/Dashboard.svg',
              tap: () { 
                                  //After successful login we will redirect to profile page. Let's create profile page now
                                  // Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => ProfilePage()));
                                  
                                  Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>TechMainDash() ));
                               }
              ),
         
               DrawerListTile(
              title: 'tickets', svgSrc: 'assets/icons/Pages.svg', tap: () {
                 Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) =>AllticketsTech() ));
              }),
          // DrawerListTile(
          //     title: 'Message', svgSrc: 'assets/icons/Message.svg', tap: () {}),
          DrawerListTile(
              title: 'Statistics',
              svgSrc: 'assets/icons/Statistics.svg',
              tap: () {}),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: appPadding * 2),
            child: Divider(
              color: grey,
              thickness: 0.2,
            ),
          ),

          DrawerListTile(
              title: 'Settings',
              svgSrc: 'assets/icons/Setting.svg',
              tap: () {}),
          DrawerListTile(
              title: 'Logout',
              svgSrc: 'assets/icons/Logout.svg',
              tap: () {}),
        ],
      ),
    );
  }
}
