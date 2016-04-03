angular.module('starter.story', [])
.controller('StoryCtrl', function($scope, $stateParams, $timeout, $compile) {
  $scope.params = $stateParams;
  $scope.storyObj = {
    title: "Preperation for the Sun",
    desc: "Sunblock and hats save the day when Intense Sunlight is needed to fight off bad guys",
    author: 'Michelle Storey',
    tags: ['friend','vehicle','sunscreen','sunblock','darkness','sunlight'],
    id: 1,
    inputs:{
      main:       { title:'Main Character', type: 'text'},
      gender:     { title:'Gender', type: 'radio'},
      sub:        { title:'Second Character',type: 'text'},
      vehicle:    { title:'Favorite Vehicle',type: 'text'},
      vgroup:     { title:'Villian Group',type: 'text'},
      vvecicle:   { title:"Villian's Vehicle",type: 'text'}
    },
    text:'In a small village lived a little boy/girl <span ng-bind="storyObj.inputs.main.value"></span> and his friend  __B.  __ A was an apprentice learning how to make weapons in a blacksmith shop.  He worked long hours to make his swords and arrows just right and his/her friend often liked to watch and help. \n\n One night while __A was up working well past the time his friend had gone to bed, there was a loud disturbance outside.  __A looked out the door and up the street to see a large band of __C coming down the street.  __A grabbed some of his/her finest weapons and charged into battle.  It wasn&#39;t long til __B was fighting right by his side.  &#34;I thought you were in bed!?” __A said.  <br/><br/>&#34;How could I sleep with all this noise? And besides, I wasn&#39;t about to let you have all the fun!” __B said while wielding a sword at an oncoming __C.<br/><br/>There was a loud &#34;boom” and right in the middle of the street appeared an old man with a long beard.  The __Cs seemed to recognize him and immediately started running from the street.  &#34;Take a hostage!,” one of the __C&#39;s yelled as they all headed for the hills.<br/><br/>&#34;__C” gasped __A, &#34;where&#39;s my friend?” he shouted, &#34;__C!”  He heard __B screaming out his/her name as he saw his friend being carried off by the the __Cs in their __Ds.  <br/><br/>__A ran after the __Cs but they were too fast.  He would never catch them on foot.  <br/><br/>The old man who had appeared out of thin air in the middle of the battle said, &#34;If you want to get your friend back, we&#39;ll need to gather some supplies.  I have a powerful weapon we can use against them to get her back.”<br/><br/>&#34;Who are you?” __A asked.  <br/><br/>&#34;You can call me Bolt” the man replied.  I have power over light and electricity. <br/><br/>Those bully __Cs hate the light and we can use it get your friend back.”<br/><br/>&#34;Then you know where they have taken him/her?” __A asked hopefully.<br/><br/>&#34;Yes, to the caves of darkness.”  Bolt replied. &#34;But if you are going to come with me, you will need to be prepared for intense brightness.  You will need sunglasses, sunscreen, and a hat.  And Hurry! We need to leave right away!”<br/><br/>__A quickly ran to his workshop and shoved a bottle of sunscreen into his backpack along with his sunglasses and his cap.  When he ran back out to the street.  Bolt was waiting for him in his awesome __E.  &#34;Hop in!” Bolt said.  <br/><br/>__A jumped right in and got to work applying sunscreen to all of his skin while they drove to the caves of darkness.<br/><br/>Once they got arrived.  They walked right up to the entrance of the cave and Bolt pulled a beautiful sword from it&#39;s sheath at his hip.  He swung it through the air a few times and it began to glow.  &#34;Hand over __B!” He yelled to the __ Cs.  They did nothing so Bolt turned and nodded at __A, which was a the signal to put on his sunglasses and hat.  __A quickly put them on and Bolt plunged the sword into the ground of cave.  Light burst out through the crack in the ground where the sword had hit.  Light so intense and bright that the __Cs all screamed and covered their eyes.  Their skin started to sizzle and burn.  As they crumpled helpless to the ground under the intense light.  __A ran through the cave and found his friend.  She/he couldn&#39;t see because she/he didn&#39;t have sunglasses so __A picked her up and gave her/him his/her hat for some protection from the bright light as he/she ran out of the cave.  <br/><br/>Once they were safely out, Bolt removed his sword from the ground and followed them out to the __E.  __B was luckily wearing long sleeves and pants and with the addition of __A&#39;s hat, she/he had not been burned by the bright light. <br/><br/>&#34;What was that?” __B asked. <br/><br/>&#34;Intensified sunlight.” Bolt responded as he drove them back to their village.  I don&#39;t think you&#39;ll have anymore problems from those __C&#39;s now.  <br/><br/>They thanked Bolt for his help and told him he was welcome to come visit them anytime.  He said it was his pleasure to help and disappeared in a flash of light.<br/><br/>__A and __B were happy to be home again and after seeing how much damage that intense sunlight could do.  They always applied sunscreen and wore sunglasses and hats whenever they were in the sun.   The End.'
  };
  var inputs = Object.keys($scope.storyObj.inputs);

  // TODO: un-hack this
  $timeout(function(){
    // necesarry because angular strips out attributes on span if used in ng-bind-html
    var storyDiv = document.getElementById('replace-with-html');
    storyDiv.innerHTML = $scope.storyObj.text;
    $compile(storyDiv)($scope);
  })
});
