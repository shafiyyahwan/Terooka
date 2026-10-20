/* Prototype experiences: not real bookings or confirmed availability. */
window.TerookaData = window.TerookaData || {};
window.TerookaData.experiences = [
 {id:'exp-beads',placeId:'beads',title:'Traditional Beadwork Workshop',category:'Crafts',durationMinutes:90,description:'Learn basic bead patterns in a demo cultural workshop.',missionId:'mission-beads',demo:true},
 {id:'exp-laksa',placeId:'laksa',title:'Sarawak Flavours Experience',category:'Food',durationMinutes:75,description:'Explore the ingredients and stories behind Sarawak-inspired dishes.',missionId:'mission-food',demo:true},
 {id:'exp-weaving',placeId:'weaving',title:'Weaving Discovery',category:'Crafts',durationMinutes:60,description:'Discover traditional weaving techniques through a sample activity.',missionId:'mission-weaving',demo:true},
 {id:'exp-river',placeId:'riverstory',title:'Riverside Story Walk',category:'Heritage',durationMinutes:45,description:'Follow a prototype cultural storytelling trail.',missionId:'mission-river',demo:true}
];
window.TerookaData.missions = [
 {id:'mission-beads',placeId:'beads',title:'Create a Bead Pattern',type:'activity',points:50,verification:'demo-button'},
 {id:'mission-food',placeId:'laksa',title:'Discover a Local Flavour',type:'activity',points:40,verification:'demo-button'},
 {id:'mission-weaving',placeId:'weaving',title:'Explore Weaving',type:'activity',points:50,verification:'demo-button'},
 {id:'mission-river',placeId:'riverstory',title:'Listen to a Riverside Story',type:'story',points:30,verification:'demo-button'}
];
