//alert("i");
var v = bl$("id_div_" + "plxName-i.js"); 
v.innerHTML = "i.js test v0.1. 3 ";
var b0	=  blo0.blBtn( v , v.id + "b0" , "b0", "brown" );
b0.onclick = function(){
	b0.v.innerHTML = ftnI;
	_on_off_div(this,b0.v);
}
var ll = [];
var tm = [];
var ts = [];
var b0a	=  blo0.blBtn( v , v.id + "b0a" , "b0a", "purple" );
b0a.onclick = function(){
	b0a.v.innerHTML = ftnI;

	var a = b0.v.innerHTML;
	var b = a.split("/*");
	var c = b[1].split(";;");
	var d = c[1].split(":");
	var e = "";
 	for(var i=1;i<d.length;i++){
		//e +=   "[" + i + "_" + tm + ":" + ts+ "] ";
		var di = d[i].split(" ");
		for(var j=0; j<di.length;j++){
			if(0==j){				
				var f = di[j].split("\n"); 
				for(var k=0;k<f.length;k++){
					//e += f[k] + "r,";
				}
				ts[i] = f[0];
				e +=  f[f.length-1];
			}		 
			else if(di.length-1 == j){
				var f = di[j].split("\n"); 
				for(var k=0;k<f.length;k++){
					//e += f[k] + "k,";
				}
				e += f[0];
				tm [i] =  f[f.length-1];
			}
			else					e += "_" + di[j] + "_";
		}
		//e += "<br>";
		ll[i] = e;
		e = "";
	}
	var ss = "";
	for(var i = 1; i<ll.length;i++){
			ss += i + "_[" + tm[i] + ":" +  ts[i] + "] " + ll[i] + "<br>";
	}
		this.v.innerHTML = ss;
	_on_off_div(this,b0a.v);
}
var b1	=  blo0.blBtn( v , v.id + "b1" , "timer", "gold" );
b0.v = blo0.blDiv(v, v.id + "b0v" , "b0v", "lightblue");
b0a.v = blo0.blDiv(v, v.id + "b0av" , "b0av", "gray");
 
 
b1.n = 0;
b1.v1 = blo0.blDiv(v, v.id + "v1" , "v1", "lightgreen");
var btn =  b1;  var v = b1.v1;
btn.onclick = function run(_this, _v) {
 var r = false; 
 var n = 0;
 var t = null;

	var ti = 0;
	var li = "__"; var ii = 0;
  
 return function(){
  if(!r){
     t = setInterval(myTimer ,100);
     r=true;
  }
  else{
    clearInterval(t); 
    n = 0;
    _v.innerHTML = n;
    r=false;
  }
   
   function myTimer() {
       n++;
       var au = bl$("myVideo");
	var ct = au. currentTime;
	for( var i=1;i<ll.length;i++){
		ti = parseInt(tm[i]*60) + parseInt(ts[i]); 	var dt = ti - ct;
		if( dt <0.5 && dt > -0.5){
			ii = i;
		}
	}
       _v.innerHTML = n + ":" + ct + ": ii =" + ii + " tm=" + tm[ii] + "ts=" + ts[ii]+ "<br>" + ll[ii] ;
   }
 }
}(btn,v);

var btnTitle	=  blo0.blBtn( v , v.id + "btnTitle	" , "title", "brown" );
btnTitle. onclick  = function(){
	this.v= blo0.blDiv(v, this.id + "v" , "v", "lightblue");
	this.v.innerHTML = ftnI;
	var a = this.v.innerHTML;
	var b = a.split("/*");
	var c = b[1].split(";;");
	this.v.innerHTML = c[0];	
	this.v.onclick = function(){		b1.v1.innerHTML = btnTitle.v.id;		}
}

var btnBody	=  blo0.blBtn( v , v.id + " btnBody	" , " Body	", "lightRed" );
btnBody	. onclick  = function(){
	this.v= blo0.blDiv(v, this.id + "v" , "v", "lightYellow");
	this.v.innerHTML = ftnI;
	var a = this.v.innerHTML;
	var b = a.split("/*");
	var c = b[1].split(";;");
	this.v.innerHTML = c[1];	

	this.v.onclick = function(){		b1.v1.innerHTML = btnBody.v.id;		}
}


var btnParseBody	=  blo0.blBtn( v , v.id + " btnParseBody	" , " ParseBody	", "purple" );
btnParseBody	. onclick  = function(){
	b1.v1.innerHTML = btnBody	.v.innerHTML;
	var m = document.getElementsByTagName("textarea"); var p = m[0]; p.value = b1.v1.id;
}

//=======================================================================================================
var ftnI = function(){//ftnI;
/*
title: 10 ways to have a better conversation | Celeste Headlee;;

00:11

all right I want to see a show of hands

00:14

how many of you have unfriended someone

00:16

on Facebook because they said something

00:18

offensive about politics or religion

00:20

child care food and how many of you know

00:26

at least one person that you avoid

00:27

because you just don't want to talk to

00:29

them you know it used to be that in

00:33

order to have a polite conversation we

00:35

just had to follow the advice of Henry

00:36

Higgins in my fair lady stick to the

00:38

weather and your health but these days

00:41

with climate change in anti-vaccine

00:43

those subjects are not safe either

00:47

so this world that we live in this world

00:51

in which every conversation has the

00:53

potential to devolve into an argument

00:54

where our politicians can't speak to one

00:56

another and where even the most trivial

00:59

of issues have someone fighting both

01:00

passionately for it and against it it's

01:03

not normal pew research did a study of

01:06

10,000 American adults and they found

01:08

that at this moment we are more

01:09

polarized we are more divided than we

01:12

ever have been in history we're less

01:15

likely to compromise which means we're

01:17

not listening to each other and we make

01:19

decisions about where to live who to

01:21

marry and even who our friends are going

01:23

to be based on what we already believe

01:25

again that means we're not listening to

01:28

each other a conversation requires a

01:30

balance between talking and listening

01:32

and somewhere along the way we lost that

01:34

balance now part of that is due to

01:35

technology the smart phones that you all

01:37

either have in your hands or close

01:39

enough that you could grab them really

01:40

quickly according to Pew Research about

01:43

a third of American teenagers send more

01:45

than a hundred texts a day and many of

01:49

them almost most of them are more likely

01:52

to text their friends than they are to

01:53

talk to them face to face there's this

01:56

great piece in the Atlantic it was

01:57

written by a high school teacher named

01:59

Paul Barnwell and he gave his kids a

02:01

communication project he wanted to teach

02:02

him how to speak on a specific subject

02:04

without using notes and he said this I

02:07

came to realize

02:09

I came to realize that conversational

02:14

competence might be the single most

02:16

overlooked skill we fail to teach kids

02:19

spend hours each day engaging with ideas

02:22

and each other through screens but

02:24

rarely do they have an opportunity to

02:25

hone their interpersonal communication

02:27

skills it might sound like a funny

02:29

question but we have to ask ourselves is

02:31

there any 21st century skill more

02:33

important than being able to sustain

02:35

sustained coherent confident

02:37

conversation now I make my living

02:39

talking to people Nobel Prize winners

02:42

truck drivers billionaires kindergarten

02:45

teachers heads of state plumbers I talk

02:49

to people that I like I talk to people

02:50

that I don't like I talked to some

02:52

people that I disagree with deeply on a

02:54

personal level but I still have a great

02:56

conversation with them so I'd like to

02:59

spend the next 10 minutes or so teaching

03:01

you how to talk and how to listen many

03:05

of you have already heard a lot of

03:06

advice on this things like look the

03:08

person in the eye think of interesting

03:10

things topics to discuss in advance

03:12

look nod and smile the show that you're

03:16

paying attention repeat back what you

03:19

just heard or summarize it so I want you

03:21

to forget all of that it is crap

03:26

there is no reason to learn how to show

03:29

you're paying attention if you are in

03:31

fact paying attention now I actually use

03:40

the exact same skills as a professional

03:42

interviewer that I do in regular life so

03:47

I'm going to teach you how to interview

03:49

people and that's actually going to help

03:51

you learn how to be better conversations

03:53

learn to have a conversation without

03:55

wasting your time without getting bored

03:57

and please God without offending anybody

04:00

we've all had really great conversations

04:03

we've had them before we know what it's

04:04

like the kind of conversation when you

04:06

walk away feeling engaged and inspired

04:08

or where you feel like you've made a

04:10

real connection or you've been perfectly

04:12

understood there is no reason why most

04:15

of your interactions can't be like that

04:17

so I have 10 basic rules I'm going to

04:20

walk you through all of them but

04:21

honestly if you just choose one of them

04:23

and master it

04:24

you're already enjoy better

04:26

conversations number one don't multitask

04:29

and I don't mean just set down your cell

04:31

phone or your tablet or your car keys or

04:33

whatever's in your hand I mean be

04:35

present be in that moment

04:38

don't be thinking about your argument

04:41

you have with your boss don't be

04:42

thinking about what you're going to have

04:43

for dinner if you want to get out of the

04:45

conversation get out of the conversation

04:46

but don't be half in it and half out of

04:49

it number two don't pontificate if you

04:53

wanted to state your opinion without any

04:55

opportunity for response or argument or

04:58

pushback or gross write a blog now

05:05

there's a really good reason why I don't

05:07

allow pundits on my show because they're

05:09

really boring if they are conservative

05:11

they're going to hate Obama and food

05:13

stamps and abortion if they're a liberal

05:14

or they're going to hate big banks and

05:16

oil corporations and Dick Cheney totally

05:19

predictable and you don't want to be

05:21

like that you need to enter every

05:23

conversation assuming that you have

05:25

something to learn the famed therapist

05:28

Emma Scott Peck said that true listening

05:30

requires a setting aside of oneself and

05:33

sometimes that means setting aside your

05:36

personal opinion he

05:38

said that sensing this acceptance the

05:41

speaker will become less and less

05:43

vulnerable and more and more likely to

05:44

open up the inner recesses of his or her

05:47

mind to the listener again assume that

05:50

you have something to learn

05:52

Bill Nye everyone you will ever meet

05:55

know something that you don't I put it

05:57

this way everybody is an expert in

06:00

something number three use open-ended

06:05

questions in this case take a cue from

06:07

journalists start your questions with

06:08

who what where when why or how if you

06:11

put in a complicated question you're

06:13

going to get a simple answer out if I

06:15

ask you were you terrified you're going

06:17

to respond to the most powerful word in

06:19

that sentence which is terrified and the

06:20

answer is yes I was er no I wasn't were

06:23

you angry yes I was very angry let them

06:26

describe it very ones that no try asking

06:29

them things like what was that like how

06:32

did that feel because then they might

06:34

have to stop for a moment and think

06:36

about it and you're going to get a much

06:38

more interesting response number four go

06:42

with the flow that means thoughts will

06:45

come into your mind and you need to let

06:47

them go out of your mind

06:49

we've heard interviews often in which a

06:52

guest is talking for several minutes and

06:54

then the host comes back in and asked a

06:55

question which seems like it comes out

06:57

of nowhere or it's already been answered

06:59

that means the host probably stopped

07:01

listening two minutes ago because he

07:03

thought of this really clever question

07:05

and he was just bound and determined to

07:08

say that and we do the exact same thing

07:11

we're sitting there having a

07:12

conversation with someone and then we

07:13

remember that time that we met Hugh

07:15

Jackman in a coffee shop

07:17

and we stopped listening stories and

07:21

ideas are going to come to you you need

07:22

to let them come and let them go number

07:26

five if you don't know say that you

07:29

don't know now people on the radio

07:31

especially on NPR are much more aware

07:33

that they're going on the record and so

07:36

they're more careful about what they

07:38

claim to be an expert in and what they

07:40

claim to know for sure do that err on

07:42

the side of caution talk should not be

07:45

cheap number six don't equate your

07:48

experience with theirs if they're

07:51

talking about having lost a family

07:53

member

07:53

don't start talking about the time that

07:55

you lost a family member if you're

07:56

talking about the trouble that they're

07:57

having at work don't tell them about how

07:59

much you hate job it's not the same it

08:01

is never the same all experiences are

08:04

individual and more importantly it is

08:07

not about you you don't need to take

08:09

that moment to prove how amazing you are

08:12

or how much you've suffered somebody

08:15

asked Stephen Hawking once what his IQ

08:16

was and he says I have no idea people

08:18

who brag about their IQs or losers

08:22

conversations are not a promotional

08:25

opportunity number seven try not to

08:32

repeat yourself it's condescending and

08:34

it's really boring and we tend to do it

08:36

a lot especially in work conversations

08:38

or in conversations with our kids we

08:40

have a point to make so we just keep

08:42

rephrasing it over and over don't do

08:46

that

08:46

number eight stay out of the weeds

08:48

frankly people don't care about the

08:52

years the names the dates all those

08:55

details that you're struggling to come

08:57

up with in your mind they don't care

08:59

what they care about is you they care

09:02

about what you're like what you have in

09:04

common so forget the details leave them

09:08

out number nine this is not the last one

09:11

but it is the most important one listen

09:13

I cannot tell you how many really

09:17

important people have said that

09:18

listening is perhaps the most the number

09:21

one most important skill that you could

09:22

develop Buddha said and I'm paraphrasing

09:24

if your mouth is open you're not

09:27

learning and Calvin Coolidge said no man

09:30

ever listened his way

09:31

of a job why do we not listen to each

09:35

other number one we'd rather talk what

09:39

I'm talking I'm in control I don't have

09:41

to hear anything I'm not interested in

09:43

I'm the center of attention I can

09:45

bolster my own identity but there's

09:47

another reason we get distracted the

09:50

average person talks at about 225 words

09:52

per minute but we can listen at up to

09:55

500 words per minute so our minds are

09:58

filling in those other 275 words and

10:01

look I know it takes effort and energy

10:04

to actually pay attention to someone but

10:07

if you can't do that you're not in a

10:09

conversation you're just two people

10:11

shouting out barely related sentences in

10:13

the same place you have to you have to

10:18

listen to one another Stephen Covey said

10:19

it very beautifully he said most of us

10:22

don't listen with the intent to

10:23

understand we listen with the intent to

10:26

reply one more rule and Norton and it's

10:31

this one be brief

10:41

all of this boils down to the same basic

10:45

concept and it is this one be interested

10:48

in other people you know I grew up with

10:51

a very famous grandfather and there was

10:52

kind of a ritual in my home people would

10:55

come over to talk to my grandparents and

10:56

after they would leave my mother would

10:58

come home to us and she'd say do you

11:00

know who that was

11:01

she was the runner-up to Miss America he

11:03

was the mayor of Sacramento she won a

11:06

Pulitzer Prize he is a Russian ballet

11:07

dancer and I started I kind of grew up

11:11

assuming everyone has some hidden

11:13

amazing thing about them and I honestly

11:16

I think it's what makes me a better host

11:18

I keep my mouth shut as often as I

11:21

possibly can I keep my mind open and I'm

11:23

always prepared to be amazed and I'm

11:26

never disappointed you do the same thing

11:30

go out talk to people listen to people

11:34

and most importantly be prepared to be

11:37

amazed Thanks

;;

*/
}