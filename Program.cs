using System;
using System.Collections.Generic;

namespace Zadanie_4
{
    class Program
    {
        static void Main(string[] args)
        {
            string napis1 = "\u0022'|\u0022||\u0022|'\u0022";       // Poprawny
            string napis2 = "\u0022''|\u0022||\u0022||'\u0022";     // Niepoprawny
            string napis3 = "\u0022||||\u0022";                     // Poprawny
            WalidujCudzyslow(napis2);
        }

        static void WalidujCudzyslow(string napis)
        {
            Dictionary<char, string> slownik = new Dictionary<char, string>
            {
                {'"',"podwójny"},         // "
                {'\u0027',"pojedynczy"},  // '
                {'|',"absolut"}           // |
            };
            Dictionary<string, char> znakslownik = new Dictionary<string, char>
            {
                {"podwójny",'"'},          // "
                {"pojedynczy",'\u0027'},   // '
                {"absolut",'|'}            // |
            };
            Stack<string> cudzyslow = new Stack<string>();
            foreach (char znak in napis)
            {
                if (cudzyslow.Count == 0)
                {
                    cudzyslow.Push(slownik[znak]);
                }
                else
                {
                    if (cudzyslow.Peek() == slownik[znak])
                    {
                        cudzyslow.Pop();
                    }
                    else
                    {
                        cudzyslow.Push(slownik[znak]);
                    }
                }
            }
            if (cudzyslow.Count == 0)
            {
                Console.WriteLine("Cudzysłowia zamknięte poprawnie");
            }           
            else
            {
                Console.WriteLine("Cudzysłownia niedomknięte poprawnie, zamknij ten cudzysłów: ");
                foreach(string znak_ in cudzyslow)
                {
                    Console.WriteLine($"{znakslownik[znak_]} {znak_}");
                }
            }
        }
    }
}