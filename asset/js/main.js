import { weaponTypeArr, weaponArr } from "./weaponList.js";

const weaponTypeSelect = document.getElementById("weapon-type-select");
const weaponSelect = document.getElementById("weapon-select");
const inputTextarea = document.getElementById("input-text");

// weaponTypeSelect 초기값 설정
for (let i = 0; i < weaponTypeArr.length; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = weaponTypeArr[i];
    weaponTypeSelect.appendChild(opt);
}

// weaponSelect 초기값 설정
for (let i = 0; i < weaponArr[0].length; i++) {
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = weaponArr[0][i];
    weaponSelect.appendChild(opt);
}

/**
 * weapon-type-select에서 option을 선택하면
 * weapon type에 맞게 weapon-select의 option들을 변경한다.
 */
weaponTypeSelect.onchange = function weaponTypeChange() {
    let weapons = weaponArr[weaponTypeSelect.value];
	weaponSelect.options.length = 0;
	for (let i = 0; i < weapons.length; i++) {
		let opt = document.createElement("option");
		opt.value = i;
		opt.textContent = weapons[i];
		weaponSelect.appendChild(opt);
	}
}

/**
 * textarea의 내용이 길어지면 자동으로 높이를 늘려준다.
 */
inputTextarea.oninput = function textareaAutoSize() {
    inputTextarea.style.height = "auto";
    inputTextarea.style.height = inputTextarea.scrollHeight + "px";
}