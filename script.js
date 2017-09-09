var cNote = document.getElementById('cAudio');
var dNote = document.getElementById('dAudio');
var eNote = document.getElementById('eAudio');
var fNote = document.getElementById('fAudio');
var gNote = document.getElementById('gAudio');
var aNote = document.getElementById('aAudio');
var bNote = document.getElementById('bAudio');


function playNote(note)
{
	note.play();
	note.currentTime=0;
}

function playSound(divNote, note)
{
	divNote.addEventListener('click', function()
		{
			playNote(note);
		}, false);
}

playSound(c_note, cNote);
playSound(d_note, dNote);
playSound(e_note, eNote);
playSound(f_note, fNote);
playSound(g_note, gNote);
playSound(a_note, aNote);
playSound(b_note, bNote);



