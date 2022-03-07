import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/constants/responsive.dart';
import 'package:responsive_admin_dashboard/user screens/user-components/analytic_cards.dart';
import 'package:responsive_admin_dashboard/user screens/user-components/custom_appbar.dart';




class DashboardContent extends StatelessWidget {
  const DashboardContent({Key? key}) : super(key: key);

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
                      child: Column(
                        children: [
                          AnalyticCards(),
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
                            
                          
                            ],
                            crossAxisAlignment: CrossAxisAlignment.start,
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
