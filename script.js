/* Utilities for redirection
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


/* Strip the domain name and get only the parameters. */
function strip(url) {
	// RegEx: [^/]*$
	// Explanation: match substring at the end that does not contain `/`
	return url.match("[^/]*$")[0];
}

/* Get a random instance from `instances`. */
function getInstance() {
	const index = Math.floor(Math.random() * instances.length);
	return instances[index];
}

/* Redirect to one of the instance. */
function redirect(link) {
	console.log(link);
	console.log(strip(link));
	window.location.href = getInstance() + strip(link);
}

instances.forEach(instance => {
	const listItem = document.createElement("li");
	const link = document.createElement("a");
	link.innerText = instance;
	link.href = instance;
	listItem.appendChild(link);
	instanceList.appendChild(listItem);
})

submit.onclick = function() {
	redirect(url.value)
}
