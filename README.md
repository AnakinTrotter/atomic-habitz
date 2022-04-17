# bonsai
LA Hacks 2022

## Requirements
- Python 3.10.4
- Expo
- React Native

## To Do
- Replace the IP address in `client/constants/urls.js` to 127.0.0.1 if using the simulator, or your own private IPv4 address if testing on Expo Go on your physical device.

To start the client:
```sh
cd client
expo start
```

To start the server (in another tab):
```sh
cd server`
pip3 install -r requirements.txt
cd habit
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```
