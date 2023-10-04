// DropZone.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onCombine }) => {
    const [elementCounts, setElementCounts] = useState({ C: 0, H: 0, O: 0, Na: 0, Cl: 0, S: 0 });
    const [errorMessage, setErrorMessage] = useState('');

    const discovered = localStorage.getItem('discovered')

    const [, ref] = useDrop({
        accept: 'DIV',
        drop: (item) => {
            const { name } = item;

            setElementCounts((prevCounts) => ({
                ...prevCounts,
                [name]: prevCounts[name] + 1,
            }));
        },
    });

    const handleCombine = () => {
        if (
            (elementCounts['S'] === 1 && elementCounts['O'] === 4 && elementCounts['H'] === 2) ||
            (elementCounts['Na'] === 1 && elementCounts['Cl'] === 1) ||
            (elementCounts['C'] === 1 && elementCounts['O'] === 2) ||
            (elementCounts['H'] === 2 && elementCounts['O'] === 1) ||
            (elementCounts['C'] === 1 && elementCounts['H'] === 4) ||
            (elementCounts['C'] === 2 && elementCounts['H'] === 6) ||
            (elementCounts['C'] === 3 && elementCounts['H'] === 8) ||
            (elementCounts['C'] === 4 && elementCounts['H'] === 10) ||
            (elementCounts['C'] === 5 && elementCounts['H'] === 12)
        ) {
            if (elementCounts['C'] === 1 && elementCounts['O'] === 2) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    C: prevCounts['C'] - 1,
                    O: prevCounts['O'] - 2,
                }));
                onCombine('CO2 is carbondioxide');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'CO2')
                } else if (!discovered.includes('CO2')) {
                    const newData = discovered + ',CO2'
                    localStorage.setItem('discovered', newData)
                }
            }

            if (elementCounts['S'] === 1 && elementCounts['O'] === 4 && elementCounts['H'] === 2) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    H: prevCounts['H'] - 2,
                    O: prevCounts['O'] - 4,
                    S: prevCounts['S'] - 1,
                }));
                onCombine('H2SO4 is sulfuric Acid');
                setErrorMessage('')
                if (discovered === '') {
                    localStorage.setItem('discovered', 'H2SO4')
                } else if (!discovered.includes('H2SO4')) {
                    const newData = discovered + ',H2SO4'
                    localStorage.setItem('discovered', newData)
                };
            }

            if (elementCounts['Cl'] === 1 && elementCounts['Na'] === 1) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    C: prevCounts['C'] - 1,
                    O: prevCounts['O'] - 1,
                }));
                onCombine('NaCl is table salt');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'NaCl')
                } else if (!discovered.includes('NaCl')) {
                    const newData = discovered + ',NaCl'
                    localStorage.setItem('discovered', newData)
                }
            }

            if (elementCounts['H'] === 2 && elementCounts['O'] === 1) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    H: prevCounts['H'] - 2,
                    O: prevCounts['O'] - 1,
                }));
                onCombine('H2O is water');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'H2O')
                } else if (!discovered.includes('H2O')) {
                    const newData = discovered + ',H2O'
                    localStorage.setItem('discovered', newData)
                }
            }

            if (elementCounts['C'] === 1 && elementCounts['H'] === 4) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    C: prevCounts['C'] - 1,
                    H: prevCounts['H'] - 4,
                }));
                onCombine('CH4 is methane');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'CH4')
                } else if (!discovered.includes('CH4')) {
                    const newData = discovered + ',CH4'
                    localStorage.setItem('discovered', newData)
                }
            }

            if (elementCounts['C'] === 2 && elementCounts['H'] === 6) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    C: prevCounts['C'] - 2,
                    H: prevCounts['H'] - 6,
                }));
                onCombine('C2H6 is ethane');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'C2H6')
                } else if (!discovered.includes('C2H6')) {
                    const newData = discovered + ',C2H6'
                    localStorage.setItem('discovered', newData)
                }
            }

            if (elementCounts['C'] === 3 && elementCounts['H'] === 8) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    C: prevCounts['C'] - 3,
                    H: prevCounts['H'] - 8,
                }));
                onCombine('C3H8 is propane');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'C3H8')
                } else if (!discovered.includes('C3H8')) {
                    const newData = discovered + ',C3H8'
                    localStorage.setItem('discovered', newData)
                }
            }

            if (elementCounts['C'] === 4 && elementCounts['H'] === 10) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    C: prevCounts['C'] - 4,
                    H: prevCounts['H'] - 10,
                }));
                onCombine('C4H10 is butane');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'C4H10')
                } else if (!discovered.includes('C4H10')) {
                    const newData = discovered + ',C4H10'
                    localStorage.setItem('discovered', newData)
                }
            }

            if (elementCounts['C'] === 5 && elementCounts['H'] === 12) {
                setElementCounts((prevCounts) => ({
                    ...prevCounts,
                    C: prevCounts['C'] - 5,
                    H: prevCounts['H'] - 12,
                }));
                onCombine('C5H12 is pentane');
                setErrorMessage('');
                if (discovered === '') {
                    localStorage.setItem('discovered', 'C5H12')
                } else if (!discovered.includes('C5H12')) {
                    const newData = discovered + ',C5H12'
                    localStorage.setItem('discovered', newData)
                }
            }
        } else {
            setErrorMessage('No valid combinations.');
        }
    };

    const handleClearDropZone = () => {
        setElementCounts({ C: 0, H: 0, O: 0, Na: 0, Cl: 0, S: 0 });
        setErrorMessage('');
        onCombine('')
    };

    return (
        <div>
            <div ref={ref} style={{ border: '1px dashed black', minHeight: '100px', padding: '10px' }}>
                {Object.entries(elementCounts).map(([element, count], index) => (
                    count >= 1 && (
                        <div
                            key={index}
                            style={{ border: '1px solid black', padding: '10px', margin: '5px', display: 'inline-block' }}
                        >
                            {`${element}${count > 1 ? count : ''}`}
                        </div>
                    )
                ))}
            </div>
            <br />
            <button onClick={handleCombine}>Combine</button>
            <button onClick={handleClearDropZone}>Clear Drop Zone</button>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
    );
};

export default DropZone;
