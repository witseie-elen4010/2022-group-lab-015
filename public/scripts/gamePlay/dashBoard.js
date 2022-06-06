'use strict'

const joinRoomButton = document.getElementById('join-room')

joinRoomButton.addEventListener('click', () => {
  const RoomNumber = document.getElementById('room-code').value
  localStorage.setItem('roomcode', '')
  if (RoomNumber === '') {
    alert('Room code is required')
  } else {
    localStorage.setItem('roomcode', RoomNumber)
    console.log(localStorage.getItem('roomcode'))
    window.location.href = 'multiplayer'
  }
})
