cd %~dp0..\build
echo Copying jars from dist director to the umpleonline scripts directory
echo Do this after qfbumple when resting umpleonline
ant -DshouldPackageUmpleOnline=true -Dmyenv=wlocal -f build.umple.xml packageUmpleonline
cd %~dp0..\umpleonline\scripts
call quitserver.bat
call startexecdocker.bat