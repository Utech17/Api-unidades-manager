import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Limpiar datos existentes (opcional)
  await prisma.unit.deleteMany();
  await prisma.model.deleteMany();

  // Crear 10 modelos falsos
  const modelos: { modelCode: string; description: string }[] = [];
  for (let i = 0; i < 10; i++) {
    const modelCode = faker.string.alphanumeric(5).toUpperCase();
    const description = faker.vehicle.type(); // tipo de vehículo en español
    modelos.push({ modelCode, description });
  }

  await prisma.model.createMany({
    data: modelos,
    skipDuplicates: true,
  });

  // Crear 10 unidades falsos, asignando modelos aleatorios
  const unidades: {
    plate: string;
    description: string;
    modelCode: string;
    seatCount: number;
    type: 'Buseta' | 'Por Puestos';
    year: number;
  }[] = [];
  for (let i = 0; i < 10; i++) {
    const plate = faker.vehicle.vin().slice(0, 10).toUpperCase(); // placa simulada
    const description = faker.vehicle.vehicle();
    const modelCode = modelos[faker.number.int({ min: 0, max: 9 })].modelCode;
    const seatCount = faker.number.int({ min: 2, max: 60 });
    const type = faker.helpers.arrayElement(['Buseta', 'Por Puestos']);
    const year = faker.number.int({ min: 1990, max: 2025 });

    unidades.push({
      plate,
      description,
      modelCode,
      seatCount,
      type,
      year,
    });
  }

  await prisma.unit.createMany({
    data: unidades,
    skipDuplicates: true,
  });

  console.log('Seed completado con 10 modelos y 10 unidades.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
