# Week 1b Labs (Chapter 2: Flow Control)

## Lab 5 – Number Analyzer (If/Elif/Else)

- Create ```number_analyzer.py.```
- Ask the user for an integer.
- Print whether the number is:
  - Positive, Negative, or Zero.
  - Even or Odd.
- If the number is greater than 100, also print:
```
That’s a big number!
```
Deliverable: ```number_analyzer.py```

## Lab 6 – Login Attempts (While Loop)
- Create ```login_attempts.py.```
- Store a hardcoded password (e.g., "Cyber123").
- Prompt the user to enter the password.
- Allow **3 attempts max**:
  - If correct, print ```Access Granted.```
  - If wrong, print ```Access Denied```. and decrease attempts.
  - After 3 failed tries, print ```Account Locked```. and stop.

Deliverable: ```login_attempts.py```

## Lab 7 – Countdown & Loops with Break/Continue
- Create ```countdown.py.```
- Prompt user for a starting number (e.g., 10).
- Use a ```while``` loop to count down to 0.
- Skip printing even numbers using ```continue```.
- Stop early if the counter reaches 3 using ```break```.
- Print ```Blast off!``` after loop ends.

Deliverable: ```countdown.py```

## Lab 8 – Cyber Menu Tool (Mini-Project)
- Create ```cyber_menu.py.```

- Continuously display:
```
Cybersecurity Utility Menu
1. Check if number is even/odd
2. Countdown from 5
3. Print system warning banner
4. Exit
```
- If user chooses:
  -1: Prompt for number, print Even/Odd.
  -2: Countdown 5  to 1 with a ```for``` loop.
  -3: Print ```*** WARNING: Authorized Use Only ***```.
  -4: Break the loop and end.
- Loop back to the menu until user exits.

Deliverable: ```cyber_menu.py```
