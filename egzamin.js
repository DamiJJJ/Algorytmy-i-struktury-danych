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