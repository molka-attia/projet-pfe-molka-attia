import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';

import 'analytic_cards.dart';
// import 'package:responsive_admin_dashboard/models/analytic_info_model.dart';
// class  AnalyticInfo{
// String title;
// int count;
// String svgSrc;
// Color color;
// AnalyticInfo(String title,int count,String svgSrc,Color color){
//   this.title=title;
// }
// }
class AnalyticInfoCard extends StatelessWidget {
  const AnalyticInfoCard({this.info}) ;

  final AnalyticInfo info;

  @override
  Widget build(BuildContext context) {
    return Container(
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
                 "${info.count}",
                //'80',
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
                 "${info.svgSrc}",
                  color: Colors.blue,
                ),
              )
            ],
          ),
          Text(
           "${info.title}",
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
    );  }
}
