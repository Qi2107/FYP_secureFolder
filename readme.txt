****************************************************************************************************

This text document will teach you how to set up the environment to run the code for our application in WINDOWS OS.

Things needed: 
NodeJS (for react native)
Visual Studio Code (for programming editor)
Android Studio (Emulator) or use camera on iPhone to scan QR code (for displaying the app on an emulator or mobile device)
Source Code 

----------------------------------------------------------------------------------------------------

1. NodeJS 

Download NodeJS for windows at https://nodejs.org/download/release/v20.8.0/

We created this app using node version 20.8.0, you can download the following: node-v20.8.0-x64.msi 

Once downloaded, open it and go through the installation process

Take note and copy the folder path for the NodeJS, as we will be adding the folder path to the environment variables of your machine. 

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

2. Visual Studio Code

Download Visual Studio Code for Windows at https://code.visualstudio.com/download

**Make sure to download Visual Studio Code and not Visual Studio**

Once downloaded, open it and go through the installation process

Once Visual Studio Code has been installed, we would need to download the following packages for react native and babel

Open up Visual Studio Code, hover over View > click on Extensions (Or simply do a shortcut Ctrl + Shift + X)

Search for React Native Tools by Microsoft, download and install it

Next, search for Babel JavaScript by Michael McDermott, download and install it as well

If unsure, check out the screenshots attached below to see what their logo looks like. 

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

3. Android Studio

Download Android Studio for Windows at https://developer.android.com/studio

Once downloaded, open it and go through the installation process

Take note and copy the folder paths for the Android Studio SDK and platform-tools folder, as we will be adding the folder paths to the environment variables of your machine. 

**If you're unsure where to find the folder path for Android Studio SDK and platform-tools**
Open up Android Studio, under Projects, click on "More Actions", then click on "SDK Manager"
There will be 3 tabs, SDK Platforms, SDK Tools and SDK Update Sites, the Android Studio SDK folder path can be found at the top under Android SDK Location
For the folder paths of the platform-tools, simply type \platform-tools behind the folder path for Android Studio SDK

Afterwards, we would need to install the emulator for Android
Open up Android Studio, under Projects, click on "More Actions", then click on "Virtual Device Manager"
"Device Manager" window will pop up, click on the "Create Device" button at the top left side of the window
You can download any emulator but we personally downloaded the Pixel 4 emulator, click on the emulator you want to download then click on "Next" at the bottom of the window
The next page would be to select a system image, select R and click on the download icon right beside R, when the download is done, click on Next
After that, you will have to verify the configuration for the emulator, where you can set the name of the emulator under "AVD Name", then click on "Finish"

The downloaded emulator would be listed as 1 of the devices in Device Manager windows, click on the Play button on the right side of the window and your emulator is good to go

**Do note that you have to boot up the emulator before running the code everytime**

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

4. Source Code

Download the source code from our GitHub at https://github.com/lamontnhq/Secret

Click on the drop down button "Code" highlighted in green, then click on "Download ZIP" 

The source code will be in the zip file, extract the zip file using WinRAR or 7zip

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

5. Environment Variables

Once you have finished installing NodeJS and Android Studio, you will need to add them into your environment variable

Do a search on your machine (Windows key + S or click on the start button and use the search function) and search for environment variable, click on "Edit the environment variables for your account" 

System Properties window will pop up, click on "Advanced" tab, then click on "Environment Variables..." at the bottom of the windows

Environment Variables window will pop up, there will be "User variables for (windows user name)" and "System Variables"

Under "User variables for (windows user name)", click on "Path" then click on "Edit"

Another window called "Edit environment variable" will show up, click on "New" 
Paste the folder path of the NodeJS in there, once done, click on "New" again and paste the folder path of the Android Studio SDK, and Android Studio SDK platform-tools in there as well

Click on OK on "Edit environment variable" window, click on OK again on "Environment Variables" window, then click on OK again on "System Properties" window

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

6. Installing packages for expo and packages in the app

Open up Visual Studio Code if you hadn't, load up the source code by click on File > Open Folder > Choose the folder location for the source code (shortcut Ctrl + K, then Ctrl + O)

Next, open up a Terminal (shortcut Ctrl + Shift + `), once the terminal is opened, make sure that the file path is currently at the location of the source code

Run the following command in the terminal:

npm install -g expo cli

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

7. Starting the code and the app

If you are using the Android Emulator, boot the downloaded emulator up before running the command below

In the Terminal (shortcut Ctrl + Shift + `), run the following command: 

expo start

Expo will start running, and the Metro Bundler will start

When you see a command-line menu or a QR code, this is what you have to do for different OSes

Android (Emulator):
- Press the (a) key on your keyboard
- App will load on its own

iOS (iPhone):
- Open up the App Store and search for Expo Go (if unsure, look at the screenshot below for how it looks like)
- Open up the camera app
- Scan the QR code in the Terminal
- App will load on its own

----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------

8. Register for an account (if you haven't done so)

Once the app loads, click on the "Sign Up" button to register for an account, you will be needed to use a legitimate email with access to the inbox, so that you can verify your account. Only verified email accounts will be able to log into our app. 

****************************************************************************************************