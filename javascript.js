var reasons = [
	'I LOVE THE WAY I CAN SEE MYSELF WHEN I LOOK INTO YOUR EYES',
	'I LOVE THE WAY YOU SMELL',
	'I LOVE THE WAY YOU COVER YOUR FACE WHEN YOU’RE EMBARRASSED',
	'I LOVE THE WAY YOU HIDE IN YOUR HOODIE',
	'I LOVE IT WHEN YOU POSE IN YOUR UNDIES (PAINT ME LIKE ONE OF YOUR FRENCH GIRLS)',
	'I LOVE IT WHEN YOU RUB MY BACK AFTER I BURP',
	'I LOVE RUNNING MY FINGERS THROUGH YOUR HAIR',
	'I LOVE IT WHEN YOU GRUNT LIKE A LIL PIGGY',
	'I LOVE WHEN YOU TUCK ME IN AND GIVE ME A KISS BEFORE YOU LEAVE FOR WORK',
	'I LOVE HOW YOU GET NERVOUS ABOUT RECEIVING GESTURES',
	'I LOVE PUTTING MY HAND ON YOUR LEG WHEN YOU’RE DRIVING',
	'I LOVE THAT YOU\’RE ALWAYS WILLING TO DRIVE',
	'I LOVE WHEN YOU HANG OUT WITH MY FAMILY, REMINDS ME IT\’S RIGHT',
	'I LOVE HOW EXCITED YOU GET OVER BANANA CARAMEL PIES',
	'I LOVE HOW UNDERSTANDING YOU ARE',
	'I LOVE THAT WHEN I\’M CRYING, YOU JUST HOLD ME QUIETLY',
	'I LOVE WHEN WE\’RE JOKING AROUND AND THEN SOMEONE ADDS SOMETHING AND WE JUST PISS OURSELVES',
	'I LOVE HOW YOU ARE ALWAYS TRYING TO BE A BETTER PERSON',
	'I LOVE WHEN YOU STAND UP FOR WHAT YOU BELIEVE',
	'I LOVE THAT YOU\’RE A FEMINIST',
	'I LOVE THAT YOU\’RE SO AMBITIOUS',
	'I LOVE THAT YOU\’RE NOT AFRAID TO DREAM WITH ME',
	'I LOVE THAT YOU WANT TO SEE THE WORLD',
	'I LOVE THAT YOU\’RE SO WILLING TO HELP EVERYONE OUT ALL THE TIME',
	'I LOVE THAT YOU’RE HANDY',
	'I LOVE HOW SMART YOU ARE',
	'I LOVE HOW YOU ARE SO GOOD AT SO MANY DIFFERENT THINGS, MY RENAISSANCE MAN',
	'I LOVE PULLING THE LONG HAIRS OUT OF YOUR BEARD',
	'I LOVE WHEN YOU GIVE ME BACK RUBS',
	'I LOVE WHEN YOU PULL MY LEG UP WHEN WE’RE CUDDLING',
	'I LOVE THE SPOT ON YOUR SHOULDER WHERE I PUT MY HEAD',
	'I LOVE KISSING YOUR NECK',
	'I LOVE WHEN YOU SING WITH ME IN THE CAR',
	'I LOVE THAT WE BOTH LOVE THE RAIN',
	'I LOVE THAT YOU\’RE MY PERSONAL HOT WATER BOTTLE',
	'I LOVE THAT YOU SET GOALS FOR US',
	'I LOVE WHEN YOU BRING ME A DRINK WITHOUT ASKING',
	'I LOVE WHEN YOU KISS MY FOREHEAD',
	'I LOVE IT WHEN YOU QUOTE TIK TOKS WITH ME',
	'I LOVE WHEN YOU LAUGH AT EMILY\'S JOKES',
	'I LOVE HOW NICE YOU ARE TO EM',
	'I LOVE HOW YOU NEVER KICK THE DOGS OFF YOUR LAP EVEN WHEN THEY STINK',
	'I LOVE THAT WE CAN BE OURSELVES TOGETHER',
	'I LOVE HOLDING YOUR ARM WHEN WE WALK',
	'I LOVE THAT YOU\’RE ONE OF MY BEST FRIENDS',
	'I LOVE HOW HONEST WE CAN BE',
	'I LOVE WHEN YOU OPEN UP TO ME',
	'I LOVE HOW MUCH I MISS YOU WHEN WE\'RE NOT TOGETHER',
	'I LOVE WHEN YOU CALL ME ON YOUR LUNCH BREAK',
	'I LOVE HOW PASSIONATE YOU ARE',
	'I LOVE THAT YOU KNOW I LOVE YOU',
	'I LOVE THAT YOU\’RE VULNERABLE WITH ME',
	'I LOVE WHEN WE SAY THE SAME THING AT THE SAME TIME',
	'I LOVE WHEN YOU ASK ME IF I\’VE SEEN A MOVIE KNOWING THE ANSWER IS NO',
	'I LOVE HOW OPEN YOU ARE TO NEW THINGS',
	'I LOVE THAT YOU ENCOURAGE ME TO STEP OUT OF MY COMFORT ZONE',
	'I LOVE HOW SEXY YOU ARE',
	'I LOVE THE WAY YOU GRAB MY WAIST IN BED',
	'I LOVE WHEN YOU PLAY WITH MY HAIR',
	'I LOVE WHEN YOU LET YOUR INNER CHILD OUT',
	'I LOVE HOW YOU MAKE AN EFFORT WITH MY FRIENDS',
	'I LOVE HOW SWEET YOU ARE WITH EMILY',
	'I LOVE THAT YOU MAKE ME WANT TO BE BETTER IN EVERY WAY',
	'I LOVE THAT YOU LOVE A FRUITY COCKTAIL',
	'I LOVE THAT YOU ARE GOOD IN THE KITCHEN',
	'I LOVE WHEN YOU COOK FOR ME',
	'I LOVE WHEN WE SLEEP IN TOGETHER',
	'I LOVE WHEN YOU KISS ME AND I GET BUTTERFLIES',
	'I LOVE WHEN YOU TELL ME A STORY FOR THE SIXTH TIME',
	'I LOVE THAT YOU ALWAYS KNOW A GUY',
	'I LOVE YOUR HANDS',
	'I LOVE HOW BOUJEE YOU ARE, EVEN IF I NEED TO KILL YOUR VIBE SOMETIMES',
	'I LOVE HOW LOYAL YOU ARE',
	'I LOVE HOW RESPECTFUL YOU ARE',
	'I LOVE HOW KIND YOU ARE',
	'I LOVE WHEN WE MAKE AN EFFORT FOR DATE NIGHT',
	'I LOVE THAT YOU\’RE ALWAYS UP FOR AN ADVENTURE',
	'I LOVE WHEN YOU LIFT THE HEAVY WOOLIES BAG',
	'I LOVE HOW YOU STAND UP FOR WHAT\’S IMPORTANT',
	'I LOVE THINKING ABOUT YOU',
	'I LOVE HOW YOU\’RE REALISING YOUR WORTH',
	'I LOVE YOUR LAUGH',
	'I LOVE THAT YOU’RE PROUD TO BE WITH ME',
	'I LOVE (AND KINDA HATE) HOW WE’VE NEVER FINISHED A TV SHOW',
	'I LOVE HOW YOU STILL MAKE AN EFFORT TO SEE ME EVEN AFTER THE LONGEST DAYS',
	'I LOVE THAT EVEN WHEN I\’M BEING MEAN, YOU KNOW I HAVE YOUR BEST INTERESTS IN MY HEART',
	'I LOVE HOW YOU ALWAYS JUST GET ME',
	'I LOVE HOW YOU LET ME BE ANXIOUS AND ANGRY AND STRESSED AND THEN WE WORK IT OUT TOGETHER',
	'I LOVE THAT NO MATTER WHAT MOOD I\’M YOU LOVE ME',
	'I LOVE THE WAY YOU MAKE ME FEEL',
	'I LOVE HOW YOU\’VE CHANGED MY PERSPECTIVE ON LIFE AND LOVE',
	'I LOVE THAT YOU CLICKED INSTANTLY WITH MY FAMILY',
	'I LOVE WHEN YOU WANT TO BE THE LITTLE SPOON',
	'I LOVE WHEN HOLD ME TIGHT',
	'I LOVE HOW EXCITED YOU GET ABOUT DIRTY STUFF',
	'I LOVE HOW YOU ALWAYS OFFER ME A BITE OF YOUR MEAL',
	'I LOVE THAT YOU\’VE NEVER SAID A BAD WORD ABOUT ME',
	'I LOVE SHOWING YOU HOW MUCH I APPRECIATE YOU',
	'I LOVE THAT IF I THINK ABOUT YOU TOO MUCH, I TEAR UP',
	'I LOVE HOW MUCH YOU LOVE YOUR FAMILY',
	'I LOVE WAKING UP TO YOUR GOOD MORNING TEXTS',
	'I LOVE HOW I CAN ALWAYS DEPEND ON YOU',
	'I LOVE HOW CUTE YOU LOOK WHEN YOU SLEEP',
	'I LOVE HOW YOU ACCEPT ME AS I AM',
	'I LOVE HOW YOU ALWAYS TRY TO GET TO KNOW ME A LITTLE BETTER',
	'I LOVE WHEN YOU SAY MY NAME WHEN I\’M BEING ANNOYING',
	'I LOVE THAT YOU MAKE ME FEEL CONFIDENT',
	'I LOVE WHEN YOU BRING ME FOOD AT WORK',
	'I LOVE THAT YOU WAITED UNTIL I WAS READY TO TELL ME YOU LOVED ME',
	'I LOVE THAT WE ALWAYS TRY NEW THINGS TOGETHER',
	'I LOVE WHEN WE LAUGH TOGETHER',
	'I LOVE WHEN WE PLAY FIGHT',
	'I LOVE WHEN WE SOCK WRESTLE',
	'I LOVE WHEN YOU KISS MY HAND',
	'I LOVE WHEN YOU KISS MY CHEEK',
	'I LOVE WHEN YOU KISS MY FOREHEAD',
	'I LOVE THAT WE CAN ROAST EACHOTHER',
	'I LOVE OUR BANTER',
	'I LOVE HOW QUICKLY I FELL IN LOVE',
	'I LOVE PLANNING A FUTURE WITH YOU',
];

function newReason() {
  var randomNumber = Math.floor(Math.random() * (reasons.length));
  document.getElementById('reasonDisplay').innerHTML = reasons[randomNumber];
}
