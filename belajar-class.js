class PowerRangers {
    constructor(warna, senjata, jurus,) {
        this.color = warna;
        this.senjata = senjata;
        this.jurus = jurus;
    }

    perkenalan() {
        console.log(`
            Halo, saya adalah Power Rangers${this.color}.
            senjata yang biasanya saya gunakan adalah${this.senjata}.
            jurus andalan saya${this.jurus}
        `);
    }

}

class RobotPower extends PowerRangers {
    constructor(warna, senjata, jurus, kekuatan ) {
        super(warna, senjata, jurus,);
        
        this.kekuatan = kekuatan;
    }
}

const merah = new PowerRangers(" merah", " Gunting kuku", " duduk santuy", " kopi susu");
const putih = new PowerRangers(" putih", " spatula", " rebahan", " do'a");

merah.perkenalan();
putih.perkenalan();
