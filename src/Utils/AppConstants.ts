export const IntroDataSlider:sliderType[]=[
{
  id:'1',
  title:'TASK PLANNING',
  subtitle:'Plan your tasks to do, that way you will stay organized and you wont skip any',
  image:require('../UI/assets/images/Tasks.png')
},
{
  id:'2',
  title:'SCHEDULED APPROACH',
  subtitle:'Make a full schedule for the whole week and stay organized and productive all days',
  image:require('../UI/assets/images/Calendar.png'),
},
{
  id:'3',
  title:'TEAM-WORK PLATFORM',
  subtitle:'create a team task, invite people and manage your work together',
  image:require('../UI/assets/images/ServiceSettings.png'),
},
{
  id:'4',
  title:'SECURED INFORMATION',
  subtitle:'Your information are secure with us',
  image:require('../UI/assets/images/Security.png'),
},
];

export type sliderType={
  id:string,
  title:string,
  subtitle:string,
  image:any,
}






export type Task = {
  id: string;
  label: string;
  day: string;
  Time:String;
};


export const GroupList:Task[]=[

{id:'1' , label:'LiftPitch UI Design Meeting', day:'Tomorrow', Time:'10:20AM'},
{id:'2' , label:'Food App UI Design Meeting', day:'Wednesday', Time:'10:00AM'},
{id:'3' , label:'Social App UI Design Meeting', day:'Friday Morning', Time:'9:00AM'},
{id:'4' , label:'Application Functionality Meeting', day:'Saturday', Time:'10:20AM'},


];

export const PendingTask:Task[]=[

{id:'1' , label:'LiftPitch UI Design Meeting', day:'Tomorrow', Time:'10:20AM'},
{id:'2' , label:'Food App UI Design Meeting', day:'Wednesday', Time:'10:00AM'},
{id:'3' , label:'Social App UI Design Meeting', day:'Friday Morning', Time:'9:00AM'},
{id:'4' , label:'Application Functionality Meeting', day:'Saturday', Time:'10:20AM'},


];


export const CompletedTask:Task[]=[

{id:'1' , label:'LiftPitch UI Design Meeting', day:'Tomorrow', Time:'10:20AM'},
{id:'2' , label:'Food App UI Design Meeting', day:'Wednesday', Time:'10:00AM'},
{id:'3' , label:'Social App UI Design Meeting', day:'Friday Morning', Time:'9:00AM'},
{id:'4' , label:'Application Functionality Meeting', day:'Saturday', Time:'10:20AM'},


];







export const AppColors={
backgroundColor:{
 firstColor:'#1253AA',
 secondColor:'#05243E',

}
}

export const AppImages={
    AppLogo: require('../UI/assets/images/Logo.png'),
    Email:require('../UI/assets/images/EnvelopIcon.png'),
    Password:require('../UI/assets/images/LockIcon.png'),
    UserIcon:require('../UI/assets/images/UserIcon.png'),
    Google:require('../UI/assets/images/GoogleIcon.png'),
    Facebook:require('../UI/assets/images/Facebook.png'),
    HomeScreen:{
        UserPic:require('../UI/assets/images/ProfilePic.jpg'),
        RingIcon:require('../UI/assets/images/RingIcon.png'),
    },
    NextArrow:require('../UI/assets/images/NextButton.png'),
}

