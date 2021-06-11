function profession(){
  if
     (document.getElementById('doc').checked){
       document.getElementById('doctor').style.visibility='visible';

   }
   else
       document.getElementById('doctor').style.visibility='hidden';

   if
          (document.getElementById('stu').checked){
            document.getElementById('student').style.visibility='visible';

        }
        else
            document.getElementById('student').style.visibility='hidden';
    if
           (document.getElementById('oth').checked){
           document.getElementById('other').style.visibility='visible';

             }
             else
                 document.getElementById('other').style.visibility='hidden';
}
