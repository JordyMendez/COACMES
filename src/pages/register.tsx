import React, { useState } from 'react';
import { Input } from '@/components/ui/input';  // ajusta import si cambia nombre de la librería
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';

const ChangePasswordPage: React.FC = () => {
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validar que las nuevas contraseñas coincidan
    if (newPass !== confirmPass) {
      setError('La nueva contraseña y la confirmación no coinciden.');
      return;
    }

    // Aquí se debería hacer la llamada al backend para cambiar contraseña
    // Simulamos éxito
    setSuccess(true);
    setCurrentPass('');
    setNewPass('');
    setConfirmPass('');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Cambiar Contraseña</h2>

      {/* {error && (
        <Alert type="error" className="mb-4">
          {error}
        </Alert>
      )} */}

      {/* {success && (
        <Alert type="success" className="mb-4">
          Contraseña cambiada exitosamente.
        </Alert>
      )} */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Contraseña Actual</label>
          <Input
            type="password"
            value={currentPass}
            onChange={(e) => setCurrentPass(e.target.value)}
            placeholder="Ingrese su contraseña actual"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Nueva Contraseña</label>
          <Input
            type="password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            placeholder="Ingrese la nueva contraseña"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Confirmar Nueva Contraseña</label>
          <Input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirme la nueva contraseña"
            required
          />
        </div>

        <Button type="submit" className="w-full" color="primary">
          Cambiar Contraseña
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
