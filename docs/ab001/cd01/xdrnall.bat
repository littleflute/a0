rem V1.4
rem by littleflute 2017.4.11 05:02am bjt

@echo off
setlocal ENABLEDELAYEDEXPANSION
call set /a x = %%0
FOR /f %%a IN ('dir /b *.mp3') DO (
CALL SET /a x = !x! +1
if !x! == 1 (
CALL ECHO ---------- printing %%a
)

call ren %%a !x!.mp3
)
rem pause