#!/usr/bin/python3
# 102-magic_calculation.py
#Bessem Belloumi

def magic_calculation(a, b, c):
    """Match bytecode provided by Holberton School."""
    if a < b:
        return (c)
    if c > b:
        return (a + b)
    return (a*b - c)
