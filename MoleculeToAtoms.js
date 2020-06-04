// Created following a walkthrough by pete corey
function parseMolecule(formula) {
    function molecule(formula) {
        function parts() {
            let _parts = [];
            formula = formula.replace(/[{(]/g, "[").replace(/[})]/g, "]")
            let matches;
            let stack = []
            let regex = /((\[)|(\])|([A-Z][a-z]*))(\d*)/g;
            while (matches = regex.exec(formula)) {
                let [_, __, open, close, part, count] = matches;
                count = parseInt(count) || 1
                if (open) {
                    stack.push({
                        formula: "",
                        molecules: []
                    });
                } else if (close) {
                    let popped = stack.pop()
                    popped.molecules.push(molecule(popped.formula));
                    popped.molecules.forEach((molecule) => {
                        molecule.multiply(count);
                    });
                    if (!stack.length) {
                        popped.molecules.forEach((molecule) => {
                            _parts = _parts.concat(molecule.parts())
                        });
                    }
                    else {
                        let last = stack[stack.length - 1];
                        last.molecules = last.molecules.concat(popped.molecules);
                    }
                }
                else if (stack.length) {
                    stack[stack.length -1].formula += part + count;
                }
                else {
                    _parts.push({
                        part,
                        count: parseInt(count) || 1
                    });
                }
            }
            return _parts;
        }
                        function multiply(count) {
                            _parts.forEach((part) => {
                                part.count *= count;
                            })
                            return this;
                        }
        function parse() {
            return parts().reduce((result, {part, count}) => {
                result[part] = ~~result[part] + count
                return result;
            }, {})
        }
    
        return {
            parse,
            parts,
            multiply
        }
    }
    return molecule(formula).parse()
}

console.log(parseMolecule("H"))
console.log(parseMolecule("HMg"))
console.log(parseMolecule("H2O"))


const str = 'As2{Be4C5[BCo3(CO2)3]2}4Cu5';

//Alternate approach I found after completing the walkthrough
function parseMolecules(formula) {
	const BRACKET_OPENER_REGEXP = /\[|\{|\(/;
	const BRACKET_CLOSER_REGEXP = /\]|\}|\)/;
	const VALID_ATOM_REGEXP = /^[A-Z][a-z]?$/;
	const MULTIPLIER_REGEXP = /^\d+/;

	function createGroup(parent = {}) {
		return {atoms : {}, groups : [], multiplier : 1, parent};
	}

	function extractGroups(str) {
		const collection = createGroup();
		let currentGroup = collection;

		for (let i = 0; i < str.length; i++) {
			const currentChar = str[i];
			let isCloser = false;
			let atom;
			let multiplier = 1;

			if (BRACKET_OPENER_REGEXP.test(currentChar)) {
				// move down one level
				const parentGroup = currentGroup;
				currentGroup = createGroup(parentGroup);
				parentGroup.groups.push(currentGroup);

				continue;
			}
			else if (BRACKET_CLOSER_REGEXP.test(currentChar)) {
				// move up one level
				isCloser = true;
			}
			else if (VALID_ATOM_REGEXP.test(currentChar)) {
				const currentChar = str[i];
				const extendedChars = currentChar + str[i + 1];
				atom = currentChar;

				if (VALID_ATOM_REGEXP.test(extendedChars)) {
					atom = extendedChars;
					i++;
				}
			}

			// look at following chars for multiplier
			const multiplierMatch = str.slice(i + 1).match(MULTIPLIER_REGEXP);

			if (multiplierMatch) {
				const multiplierStr = multiplierMatch[0];
				multiplier = +multiplierStr;
				i += multiplierStr.length;
			}

			if (isCloser) {
				currentGroup.multiplier = multiplier;
				currentGroup = currentGroup.parent;
			}
			else {
				const currentAtomCount = currentGroup.atoms[atom] || 0;
				currentGroup.atoms[atom] = currentAtomCount + multiplier;
			}
		}

		return collection;
	}

	function sumGroup(group, cumulatedMultiplier = 1, acc = {}) {
		const {groups, multiplier, atoms} = group;

		cumulatedMultiplier *= multiplier;

		for (let i = 0; i < groups.length; i++) {
			sumGroup(groups[i], cumulatedMultiplier, acc);
		}

		// Object.entries cannot be used yet on codewars :(
		Object.keys(atoms).forEach(atom => {
			const prevCount = acc[atom] || 0;
			const count = atoms[atom];

			acc[atom] = prevCount + (count * cumulatedMultiplier);
		});

		return acc;
	}

	const collection = extractGroups(formula);
	return sumGroup(collection);
}

console.log(parseMolecules("H"))
console.log(parseMolecules("HMg"))
console.log(parseMolecules("H2O"))

//shortest solution that I saw after submitting my solution
// I'm looking it over to understand it better
function parseMolecule(s) {
    var o = {}
    while (s != (s = s.replace(/[\[\(\{]([a-z0-9]+)[\]\)\}]([0-9]+)/gi, (f,e,n) => repeat(e,n))));
    s.replace(/([A-Z][a-z]?)([0-9]+)?/g, (f,e,n) => (o[e] = (o[e] || 0) + +(n || 1)));
    return o;
  }
  
  function repeat(s, n) {
    for (var r = ""; n--; r += s);
    return r;
  }