import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

const CalculatorComponent = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [op, setOp] = useState('');
    const [result, setResult] = useState(0);
    const [err, setErr] = useState('')

    const operateNumbers = () => {


        switch (op) {
            case '1':
                setResult(parseFloat(a) + parseFloat(b));
                break;
            case '2':
                setResult(parseFloat(a) - parseFloat(b))
                break;
            case '3':
                setResult(parseFloat(a) * parseFloat(b))
                break;
            case '4':
                if (parseFloat(b) === 0) {
                    setErr('No es posible dividir entre 0')
                    return;
                }
            setResult(parseFloat(a) / parseFloat(b))
            default:
                break;
        }

    };

    return (
        <View>
            <Text style={{ color: 'black', justifyContent: 'center', textAlign: 'center', fontSize: 20, marginTop: 20 }}>
                Calculadora Ceutec
            </Text>
            <TextInput
                style={{ color: 'white' }}
                placeholder='Ingrese su primer numero...'
                keyboardType='numeric'
                value={a}
                onChangeText={text => setA(text)}
            />
            <TextInput
                style={{ color: 'white' }}
                placeholder='Ingrese su segundo numero...'
                keyboardType='numeric'
                value={b}
                onChangeText={text => setB(text)}
            />
            <TextInput
                style={{ color: 'white' }}
                placeholder='Ingrese su operador(1,2,3,4)...'
                keyboardType='numeric'
                value={op}
                onChangeText={text => setOp(text)}
            />

            <Text>1 = + , 2 = -, 3 = X, 4 = /</Text>

            <Button title='Calcular numeros' onPress={operateNumbers} />

            <Text style={{ color: 'black', justifyContent: 'center', textAlign: 'center', fontSize: 20, marginTop: 20 }}>
                El resultado es: {result}
            </Text>

            <Text style={{ color: 'red', justifyContent: 'center', textAlign: 'center', fontSize: 20, marginTop: 20 }}>
                {err}
            </Text>
        </View>
    );
};

export default CalculatorComponent;
