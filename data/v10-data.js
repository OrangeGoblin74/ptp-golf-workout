window.GPS_V10 = {
  version: '10.0.0',
  dimensions: {
    'Ground Force': {icon:'↟', color:'#65d68a', description:'Lower-body force production, leg strength and interaction with the ground.'},
    'Rotation': {icon:'⟳', color:'#59b7ff', description:'Controlled rotational sequencing through hips, trunk and shoulders.'},
    'Stability': {icon:'◆', color:'#b08cff', description:'Core, pelvic, shoulder and single-leg control.'},
    'Mobility': {icon:'∞', color:'#4fd1c5', description:'Usable hip, thoracic and shoulder range represented by mobility-focused work.'},
    'Upper-Body Power': {icon:'↑', color:'#ffba5a', description:'Pressing, pulling and upper-body force capacity.'},
    'Conditioning': {icon:'♥', color:'#ff6b7a', description:'Cardiovascular work, session density and recent completion frequency.'}
  },
  aliases: {
    'High-to-Low Lat Row': [], 'Standing Chest Press / Fly': [], 'Standing Glute Kickback': [],
    'Front Squat':['platform-24'], 'Shoulder Press Front':['platform-13'],
    'Deadlift / RDL':['platform-22','platform-23'], 'Deadlift':['platform-22'], 'Romanian Deadlift':['platform-23'],
    'Alternating Bicep Curl':['platform-07'], 'Wide Rear Delt Row':['platform-06'],
    'Alternating Crossover Punch':['platform-03'], 'Overhead Tricep Extension':[],
    'Back Squat':['platform-25'], 'Bent Over Row':['platform-18'], 'Conventional Bicep Curl':['platform-20'],
    'Lateral Raise / Front Raise':['platform-01','platform-16'], 'Lateral Raise':['platform-01'], 'Front Raise':['platform-16'],
    'Standing Hip Abduction':[], 'Thruster (Squat to Press)':['platform-14'], 'Thruster':['platform-14'],
    'Good Morning':['platform-21'], 'Back Squat to Calf Lift':['platform-26'], 'Wide Grip Bicep Curl':['platform-19'],
    'Bent Over Crossover Lat Raise':['platform-04'], 'Bent Over Crossover Lateral Raise':['platform-04'],
    'Single Arm / Arnold Press':['platform-09','platform-10'], 'Single Arm Press':['platform-09'], 'Arnold Press':['platform-10'],
    'Plank Finisher':['microband-06']
  },
  defaultPrograms: [
    {id:'gps-golf-strength',name:'Golf Strength',goal:'Golf Strength & Power',active:true,days:[
      {name:'Day 1',exercises:['High-to-Low Lat Row','Standing Chest Press / Fly','Standing Glute Kickback','Front Squat','Shoulder Press Front','Deadlift / RDL','Alternating Bicep Curl','Plank Finisher']},
      {name:'Day 2',exercises:['Wide Rear Delt Row','Alternating Crossover Punch','Overhead Tricep Extension','Back Squat','Bent Over Row','Conventional Bicep Curl','Lateral Raise / Front Raise','Plank Finisher']},
      {name:'Day 3',exercises:['Standing Hip Abduction','Thruster (Squat to Press)','Good Morning','Back Squat to Calf Lift','Wide Grip Bicep Curl','Bent Over Crossover Lat Raise','Single Arm / Arnold Press','Plank Finisher']}
    ]},
    {id:'gps-pre-golf',name:'Pre-Golf Activation',goal:'Activation & Mobility',active:false,days:[{name:'Activation',exercises:['Thoracic Spine Windmills','Band Pull-Aparts','Dynamic Hip Opener / 90-90','Glute Bridge & Reach','Standing Leg Swings','Swimming','Hip Flexor','Squat / Hip Rotation']} ]},
    {id:'gps-microband-travel',name:'MicroBand Travel Workout',goal:'Travel Strength',active:false,days:[{name:'Full Body',exercises:['Dynamic Lunges','Squat','Robot Walk','Kick Through','Lying Leg Curl','Bear Crawl','Baby Clam','Pelvic Roll','Single Leg Stretch','Donkey Kick']} ]},
    {id:'gps-recovery',name:'Mobility & Recovery',goal:'Mobility & Recovery',active:false,days:[{name:'Recovery',exercises:['Swimming','Hip Flexor','Dynamic Lunges','Baby Clam','Pelvic Roll','Shoulder Expansion']} ]}
  ],
  milestones:[
    {id:'m10',label:'10 Workouts',test:c=>c.sessions>=10},{id:'m25',label:'25 Workouts',test:c=>c.sessions>=25},
    {id:'m50',label:'50 Workouts',test:c=>c.sessions>=50},{id:'m100',label:'100 Workouts',test:c=>c.sessions>=100},
    {id:'volume10k',label:'10,000 kg Training Week',test:c=>c.bestWeek>=10000},
    {id:'streak4',label:'Four-Week Training Streak',test:c=>c.activeWeeks>=4},
    {id:'balanced',label:'Balanced Golf Performance',test:c=>Object.values(c.scores||{}).every(x=>x.score>=75)}
  ]
};