import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:responsive_admin_dashboard/constants/constants.dart';
import 'package:responsive_admin_dashboard/constants/responsive.dart';
import 'package:responsive_admin_dashboard/user screens/user-components/analytic_cards.dart';
import 'package:responsive_admin_dashboard/user screens/user-components/custom_appbar.dart';



class Allticketsadmin extends  StatefulWidget {
   Allticketsadmin({Key? key}) : super(key: key);
     @override
  State<Allticketsadmin> createState() => _Allticketsadmin();
}
class _Allticketsadmin extends State<Allticketsadmin> {
 String dropdownValue = 'urgent';
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        padding: EdgeInsets.all(appPadding),

        child: Column(
          children: [
             CustomAppbar(),
             SizedBox(height: 10),
             Align(
                alignment:Alignment.topRight,
                child:FloatingActionButton.extended(
                 
        onPressed: () {
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
                                labelText: 'Description',
                                icon: Icon(Icons.account_box),
                              ),
                            ),
                            // TextFormField(
                            //   decoration: InputDecoration(
                            //     labelText: 'Email',
                            //     icon: Icon(Icons.email),
                            //   ),
                            // ),
                     
                            TextFormField(
                              decoration: InputDecoration(
                                labelText: 'Priorite',
                                icon: Icon(Icons.message ),
                              ),
                              
                           ),  
//                                  DropdownButton<String>(
                              
//   items: <String>['urgent', 'moyenne', 'faible'].map((String value) {
//     return DropdownMenuItem<String>(
//       value: value,
//       child: Text(value),
       
//     );
//   }).toList(),
//   onChanged: (_) {},
// ),
DropdownButton<String>(
      value: dropdownValue,
      icon: const Icon(Icons.arrow_downward),
      elevation: 26,
     
      style: const TextStyle(color: Colors.blue),
      underline: Container(
        height: 2,
        width: 50,
        color: Colors.blue,
      ),
      onChanged: (String? newValue) {
         setState(() {
          dropdownValue = newValue!;
         });
      },
      items: <String>['urgent', 'moyenne', 'faible']
          .map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
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

      )),
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
                "nom du ticket1",
                style: TextStyle(
                  color: textColor,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),        new IconButton(
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
                    title: Text('Ticket info'),
                    content: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Form(
                        child: Column(
                          children: <Widget>[
                  
                          ],
                        ),
                      ),
                    ),
                     actions: [
                
                          FloatingActionButton.extended(
       
        label: const Text('edit'),
    
        backgroundColor: Colors.yellow,

      
                          onPressed: () {
                            // your code
                       
                          }),
                      
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
