/**
 * weapon-type-select에서 값을 선택하면
 * weapon type에 맞게 weapon-select 값을 변경한다.
 * @param {select} elem 
 */
function weaponTypeChange(elem) {
	let w1 = ["1-1", "1-2", "1-3", "1-4"];
	let w2 = ["2-1", "2-2", "2-3", "2-4"];
	let w3 = ["3-1", "3-2", "3-3", "3-4"];
	let w4 = ["4-1", "4-2", "4-3", "4-4"];
	let target = document.getElementById("weapon-select");

    let weapons;
    switch (elem.value) {
        case "1":
            weapons = w1;
            break;
        case "2":
            weapons = w2;
            break;
        case "3":
            weapons = w3;
            break;
        case "4":
            weapons = w4;
            break;
    }

	target.options.length = 0;

	for (let i = 0; i < weapons.length; i++) {
		let opt = document.createElement("option");
		opt.value = i+1;
		opt.innerHTML = weapons[i];
		target.appendChild(opt);
	}
}