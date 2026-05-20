---
title: "Un dropdown en Angular muy buscable"
description: "Un componente de dropdown de búsqueda ligero, de alto rendimiento y personalizable construido con Angular Signals."
pubDate: 2026-05-19
lang: "es"
---
Cuando estaba trabajando en un proyecto de Angular opté por no usar una librería de componentes, sino un estilo minimalista con Pico.css, necesité un componente de dropdown con búsqueda. Busqué algunas opciones pero no encontré ninguna que se adaptara completamente a mis necesidades, así que decidí construir el mío.

Recientemente lo extraje, perfeccioné y publiqué como una **librería de Angular** independiente: **[`ngx-multi-field-dropdown`](https://www.npmjs.com/package/ngx-multi-field-dropdown)**

Es un componente de dropdown con buscador personalizable, ligero y de alto rendimiento, diseñado para aplicaciones modernas de Angular. Resuelve el requerimiento común de buscar en una lista de elementos utilizando múltiples campos (por ejemplo, buscar un usuario por su nombre, rol o departamento al mismo tiempo).

### ⚡ Características Clave

- 🔍 **Búsqueda Multi-Campo**: Busca elementos por múltiples claves/propiedades de forma simultánea.
- 🚦 **Núcleo Reactivo**: Construido usando Angular Signals para una reactividad moderna y de alto rendimiento.
- 🎨 **Totalmente Personalizable**: Estilizado con variables CSS que son fáciles de sobrescribir.

### 📦 Instalación

Para instalarlo en tu proyecto de Angular, ejecuta:

```bash
npm install ngx-multi-field-dropdown
```

### 💻 Uso Básico

Importa el componente en tu componente standalone o módulo de Angular:

```typescript
import { Component } from '@angular/core';
import { NgxMultiFieldDropdownComponent } from 'ngx-multi-field-dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxMultiFieldDropdownComponent],
  template: `
    <ngx-multi-field-dropdown
      [items]="users"
      [searchFields]="['name', 'email', 'role']"
      placeholder="Buscar usuario..."
      (selectionChange)="onUserSelected($event)">
    </ngx-multi-field-dropdown>
  `
})
export class AppComponent {
  users = [
    { name: 'Luis Tapia', email: 'luis@example.com', role: 'Desarrollador' },
    { name: 'Jane Doe', email: 'jane@example.com', role: 'Diseñadora' },
    { name: 'Carlos Gomez', email: 'carlos@example.com', role: 'Gerente' }
  ];

  onUserSelected(user: any) {
    console.log('Usuario seleccionado:', user);
  }
}
```

### 🎮 Demo en Vivo

Aquí tienes el componente interactivo en vivo. También puedes ver/editar el código de ejemplo en StackBlitz:

<iframe
  src="https://luismtapiab.github.io/ngx-multi-field-dropdown/"
  style="width:100%; height:640px; border: 1px solid #ccc; border-radius: 8px; overflow:hidden;"
  title="ngx-multi-field-dropdown demo"
></iframe>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/luismtapiab/ngx-multi-field-dropdown/tree/master/example)

¡Siéntete libre de revisar el repositorio y contribuir en [GitHub](https://github.com/luismtapiab/ngx-multi-field-dropdown)! También puedes encontrar el paquete en [npm](https://www.npmjs.com/package/ngx-multi-field-dropdown).
