//Zadanie 1

class Lista {
    constructor() {
        this.początek = null
        this.koniec = null
    }
    dodajPoczątek(dane) {
        let nowy = {
            dane: dane,
            nast: this.początek
        }
        if(this.początek == null)
            this.koniec = nowy
        this.początek = nowy
    }
    usuńPoczątek() {
        let stary = this.początek
        if(stary != null)
            this.początek = stary.nast
        if(stary.nast == null)
            this.koniec = null
        return stary?.dane
    }
    dodajKoniec(dane) {
        let nowy = {
            dane: dane,
            nast: null
        }
        let stary = this.koniec
        if(stary == null)
            this.początek = nowy
        else
            stary.nast = nowy
        this.koniec = nowy
    }
}


//kod testowy
let lista = new Lista();
lista.dodajKoniec(5)
lista.dodajKoniec(3)
lista.koniec // wyświetla '3'

//Zadanie 2

class BST {
    constructor() {
        this.korzeń = null
    }
    dodaj(klucz) {
        if(this.korzeń == null) {
            this.korzeń = {
                klucz: klucz,
                lewy: null,
                prawy: null,
                rodzic: null    
            }
            return
        }
        let węzeł = this.korzeń
        while(true)
            if(klucz < węzeł.klucz)
                if(węzeł.lewy == null) {
                    węzeł.lewy = {
                        klucz: klucz,
                        lewy: null,
                        prawy: null,
                        rodzic: węzeł   
                    }
                    return
                }
                else
                    węzeł = węzeł.lewy
            else
                if(węzeł.prawy == null) {
                    węzeł.prawy = {
                        klucz: klucz,
                        lewy: null,
                        prawy: null,
                        rodzic: węzeł   
                    }
                    return
                }
                else
                    węzeł = węzeł.prawy
    }
}


//kod testowy
let bst = new BST()
bst.dodaj(5)
bst.korzeń.klucz // wyświetla '5'