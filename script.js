//your JS code here. If required.
var playButton1 = document.getElementById('btn1');
var audioPlayer1 = document.getElementById('audioPlayer1');
var playButton2 = document.getElementById('btn2');
var audioPlayer2 = document.getElementById('audioPlayer2');
var playButton3 = document.getElementById('btn3');
var audioPlayer3 = document.getElementById('audioPlayer3');
var playButton4 = document.getElementById('btn4');
var audioPlayer4 = document.getElementById('audioPlayer4');
var playButton5 = document.getElementById('btn5');
var audioPlayer5 = document.getElementById('audioPlayer5');
var playButton6 = document.getElementById('btn6');
var audioPlayer6 = document.getElementById('audioPlayer6');
function btn1() {
        // Add click event listener to the button
    playButton1.addEventListener('click', function() {
        audioPlayer1.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
    });
	function btn2() {
        // Add click event listener to the button
    playButton2.addEventListener('click', function() {
        audioPlayer2.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
    });
	function btn3() {
        // Add click event listener to the button
    playButton3.addEventListener('click', function() {
        audioPlayer3.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
    });
	function btn4() {
        // Add click event listener to the button
    playButton4.addEventListener('click', function() {
        audioPlayer4.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
    });
	function btn5() {
        // Add click event listener to the button
    playButton5.addEventListener('click', function() {
        audioPlayer5.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
    });
	function btn6() {
        // Add click event listener to the button
    playButton6.addEventListener('click', function() {
        audioPlayer6.play().catch(function(error) {
            console.error('Error playing audio:', error);
        });
    });
	function btn7() {
			audioPlayer.pause();
            audioPlayer.currentTime = 0;
	}
}

