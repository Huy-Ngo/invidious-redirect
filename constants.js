/* Constants
 * Copyright (C) 2021 Ngô Ngọc Đức Huy
 *
 * This file is part of invidious-redirect.
 *
 * invidious-redirect is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * invidious-redirect is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with invidious-redirect.  If not, see <https://www.gnu.org/licenses/>.
 * */

const instances = [
	"https://invidious.snopyta.org/",
	"https://yewtu.be/",
	"https://invidious.tube/",
	"https://invidious.kavin.rocks/",
	"https://ytprivate.com/",
	"https://au.ytprivate.com/",
	"https://invidious.048596.xyz/",
	"https://invidious.zee.li/",
	"https://vid.puffyan.us/",
	"https://invidious.himiko.cloud/",
	"https://inv.skyn3t.in/",
	"https://invidious.ethibox.fr/",
	"https://tube.connect.cafe/",
	"https://invidious.site/",
	"https://vid.mint.lgbt/",
	"https://invidiou.site/",
	"https://invidious.fdn.fr/",
	"https://invidious.zapashcanon.fr/",
	"https://invidious.namazso.eu/"
];

// DOM objects

const instanceList = document.querySelector("ul#instances");
const url = document.querySelector("input#youtube-url");
const submit = document.querySelector("button#submit");
