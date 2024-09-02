import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Conectarse al servidor de socket.io
const socket = io('http://localhost:3000'); //INGRESAR PUERTO A UTILIZAR

const Chat = () => {
    // Estado para almacenar los mensajes del chat
    const [mensajes, setMensajes] = useState([]);
    // Estado para almacenar el mensaje actual que el usuario está escribiendo
    const [mensaje, setMensaje] = useState('');
    // Estado para almacenar el nombre de usuario
    const [usuarioID] = useState(1);

    useEffect(() => {
        socket.on('mensaje', (mensaje) => {
            setMensajes((prevMensajes) => [...prevMensajes, mensaje]);
        });
        return()=>{
            socket.disconnect
        }
        }, []);

        const enviarMensaje = () => {
            if (mensaje.trim()) {
                const nuevoMensaje = {
                    usuarioId: usuarioId,
                    texto: mensaje,
                };
    
                // Emitir el mensaje al servidor
                socket.emit('mensaje', nuevoMensaje);
    
                // Añadir el mensaje al estado local
                setMensajes([...mensajes, nuevoMensaje]);
                setMensaje(''); // Limpiar el campo de texto
            }
        };

        // Escuchar mensajes nuevos enviados por otros usuarios
        socket.on('mensaje', (mensaje) => {
            setMensajes((prevMensajes) => [...prevMensajes, mensaje]);
        });
        return (
            <div className="chat-container">
                <h2>Chat</h2>
                <div className="chat-window">
                    {mensajes.map((msg, index) => (
                        <div key={index} className="chat-message">
                            <strong>{msg.usuarioId}: </strong>
                            <span>{msg.texto}</span>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                />
                <button onClick={enviarMensaje}>Enviar</button>
            </div>
        );
};

export default Chat;
