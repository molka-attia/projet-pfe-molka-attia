import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/constants/responsive.dart';
import 'package:responsive_admin_dashboard/tech screens/tech-components/analytic_cards.dart';
import 'package:responsive_admin_dashboard/tech screens/tech-components/custom_appbar.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'package:responsive_admin_dashboard/tech screens/tech-components/viewers.dart';
import 'package:responsive_admin_dashboard/tech%20screens/tech-components/users.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:http/http.dart' as http;


class DashboardContent extends StatefulWidget {
  @override
  State<DashboardContent> createState() => _DashuserState();
}

class _DashuserState extends State<DashboardContent> {
  GlobalKey<ScaffoldState> _drawerKey = GlobalKey();
   String selectedValue = "Urgent";
List<DropdownMenuItem<String>> get dropdownItems{
  List<DropdownMenuItem<String>> menuItems = [
    DropdownMenuItem(child: Text("Urgent"),value: "Urgent"),
    DropdownMenuItem(child: Text("Moyenne"),value: "Moyenne"),
    DropdownMenuItem(child: Text("faible"),value: "Faible"),
 
  ];
  return menuItems;
}
var ticketnoncloturer;
  var ticketattribues;
  var demande;
  
  
  getTicketattribue() async {
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
   // var url = "http://localhost:3000/api/users/tickets";
   // };http://localhost:3000/api/tickets/${id}/deleteticket
    var uri = Uri.parse("http://localhost:3000/api/tickets/"+
       userId +"/statstechtickets");
        //http://localhost:3000/api/tickets/${id}/getTechtickets
    //var uri = Uri.parse(url);
    // var request = http.get(uri, headers: headers);
    var request = http.get(uri, headers: headers);
    var response = await request.timeout(Duration(seconds: 10));
    setState(() {
      ticketattribues = jsonDecode(response.body);
    });
  }


getticketnoncloturer()async {
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
   // var url = "http://localhost:3000/api/users/tickets";
   // };http://localhost:3000/api/tickets/${id}/deleteticket
    var uri = Uri.parse("http://localhost:3000/api/tickets/statsalltickets");
        //http://localhost:3000/api/tickets/${id}/getTechtickets
    //var uri = Uri.parse(url);
    // var request = http.get(uri, headers: headers);
    var request = http.get(uri, headers: headers);
    var response = await request.timeout(Duration(seconds: 10));
    setState(() {
      ticketnoncloturer = jsonDecode(response.body);
    });}

getdemande()async {
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
   // var url = "http://localhost:3000/api/users/tickets";
   // };http://localhost:3000/api/tickets/${id}/deleteticket
    var uri = Uri.parse("http://localhost:3000/api/demande/"+
       userId +"/statsdemande");
        //http://localhost:3000/api/tickets/${id}/getTechtickets
    //var uri = Uri.parse(url);
    // var request = http.get(uri, headers: headers);
    var request = http.get(uri, headers: headers);
    var response = await request.timeout(Duration(seconds: 10));
    setState(() {
      demande = jsonDecode(response.body);
    });}


  @override
  void initState() {
    super.initState();
    getTicketattribue();
    getdemande();
    getticketnoncloturer();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        padding: EdgeInsets.all(appPadding),
        child: Column(
          children: [
            CustomAppbar(),
            
            SizedBox(
              height: appPadding,
            ),
            Column(
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      flex: 5,
                      child: Row(
                        children: [
                          
                       Container(
                         height: 100,
                         width: 220,
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
          color: secondaryColor, borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
            
              Text(
                 ticketattribues["tickets"].toString(),
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
                    color: primaryColor.withOpacity(0.1),
                    shape: BoxShape.circle),
                child: SvgPicture.asset(
                   "assets/icons/Pages.svg",
                  color: Colors.blue,
                ),
              )
            ],
          ),
          Text(
          "Tickets attribués",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          )
        ],
      ),
    ),
 SizedBox(width: 20),
 Container(
     height: 100,
                         width: 220,
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
          color: secondaryColor, borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
            
              Text(
                 ticketnoncloturer["tickets"].toString(),
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
                    color: primaryColor.withOpacity(0.1),
                    shape: BoxShape.circle),
                child: SvgPicture.asset(
                   "assets/icons/Pages.svg",
                  color: Colors.blue,
                ),
              )
            ],
          ),
          Text(
          "les tickets",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          )
        ],
      ),
    ),
                          SizedBox(
                            height: appPadding,
                          ),
                    
                          if (Responsive.isMobile(context))
                            SizedBox(
                              height: appPadding,
                            ),
                          // if (Responsive.isMobile(context)) Discussions(),
                        ],
                      ),
                    ),
                    if (!Responsive.isMobile(context))
                      SizedBox(
                        width: appPadding,
                      ),
                    // if (!Responsive.isMobile(context))
                    //   Expanded(
                    //     flex: 2,
                    //     child: Discussions(),
                    //   ),
                  ],
                ),
                 SizedBox(height: 15,),
                  Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      flex: 5,
                      child: Row(
                        children: [
                          
                       Container(
                         height: 100,
                         width: 220,
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
          color: secondaryColor, borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
            
              Text(
                demande["demandes"].toString(),
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
                    color: primaryColor.withOpacity(0.1),
                    shape: BoxShape.circle),
                child: SvgPicture.asset(
                   "assets/icons/Message.svg",
                  color: Colors.blue,
                ),
              )
            ],
          ),
          Text(
          "le demandes",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          )
        ],
      ),
    ),
 SizedBox(width: 20),
 Container(
     height: 100,
                         width: 220,
      padding: EdgeInsets.symmetric(
        horizontal: appPadding,
        vertical: appPadding / 2,
      ),
      decoration: BoxDecoration(
          color: secondaryColor, borderRadius: BorderRadius.circular(10)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
            
              Text(
                "50",
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
                    color: primaryColor.withOpacity(0.1),
                    shape: BoxShape.circle),
                child: SvgPicture.asset(
                   "assets/icons/Subscribers.svg",
                  color: Colors.blue,
                ),
              )
            ],
          ),
          Text(
          "",
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              color: textColor,
              fontSize: 15,
              fontWeight: FontWeight.w600,
            ),
          )
        ],
      ),
    ),
                          SizedBox(
                            height: appPadding,
                          ),
                    
                          if (Responsive.isMobile(context))
                            SizedBox(
                              height: appPadding,
                            ),
                          // if (Responsive.isMobile(context)) Discussions(),
                        ],
                      ),
                    ),
                    if (!Responsive.isMobile(context))
                      SizedBox(
                        width: appPadding,
                      ),
                    // if (!Responsive.isMobile(context))
                    //   Expanded(
                    //     flex: 2,
                    //     child: Discussions(),
                    //   ),
                  ],
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      flex: 5,
                      child: Column(
                        children: [
                          SizedBox(
                            height: appPadding,
                          ),
                          Row(
                            children: [
                             SizedBox(
                            height: appPadding,
                          ),
                       
                              if(!Responsive.isMobile(context))
                                SizedBox(width: appPadding,),
                              Expanded(
                                flex: 3,
                                child:    Users(),
                              ),
                            ],
                            crossAxisAlignment: CrossAxisAlignment.start,
                          ),
                          Row(
                            children: [
                             SizedBox(
                            height: appPadding,
                          ),
                       
                              if(!Responsive.isMobile(context))
                                SizedBox(width: appPadding,),
                              Expanded(
                                flex: 3,
                                child:    Viewers(),
                              ),
                            ],
                            crossAxisAlignment: CrossAxisAlignment.start,
                          ),
                         
                          SizedBox(
                            height: appPadding,
                          ),
                       
                         
                        ],
                      ),
                    ),
                
                 
                  ],
                ),
              ],
            ),
            

          ],
          
        ),
      ),
    );
  }
}
