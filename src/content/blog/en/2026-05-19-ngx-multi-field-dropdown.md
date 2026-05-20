---
title: "A very searchable Angular dropdown"
description: "A lightweight, high-performance, and customizable searchable dropdown component built with Angular Signals."
pubDate: 2026-05-19
lang: "en"
---
When I was working with Angular in one project I opted to not use a library of components rather a minimal style with Pico.css,  searchable dropdown component was needed. I looked for some libraries but I didn't find one that suits my needs fully. So I decided to build my own.

I recently extracted, refined, and published as a standalone **Angular library**: **[`ngx-multi-field-dropdown`](https://www.npmjs.com/package/ngx-multi-field-dropdown)**

It is a customizable, lightweight, and high-performance searchable dropdown component designed for modern Angular applications. It addresses the common requirement of searching through a list of items using multiple fields (e.g., searching a user by name, role, or department at the same time).

### ⚡ Key Features

- 🔍 **Multi-Field Search**: Query items by multiple keys/properties simultaneously.
- 🚦 **Reactive Core**: Built using Angular Signals for modern, high-performance reactivity.
- 🎨 **Fully Customizable**: Styled with custom CSS variables that are easy to override.

### 📦 Installation

To install it in your Angular project, run:

```bash
npm install ngx-multi-field-dropdown
```

### 💻 Basic Usage

Import the component into your standalone component or Angular module:

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
      placeholder="Search user..."
      (selectionChange)="onUserSelected($event)">
    </ngx-multi-field-dropdown>
  `
})
export class AppComponent {
  users = [
    { name: 'Luis Tapia', email: 'luis@example.com', role: 'Developer' },
    { name: 'Jane Doe', email: 'jane@example.com', role: 'Designer' },
    { name: 'Carlos Gomez', email: 'carlos@example.com', role: 'Manager' }
  ];

  onUserSelected(user: any) {
    console.log('Selected user:', user);
  }
}
```

### 🎮 Live Demo

Here is the live interactive component. You can also view/edit the example code on StackBlitz:

<iframe
  src="https://luismtapiab.github.io/ngx-multi-field-dropdown/"
  style="width:100%; height:640px; border: 1px solid #ccc; border-radius: 8px; overflow:hidden;"
  title="ngx-multi-field-dropdown demo"
></iframe>

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/luismtapiab/ngx-multi-field-dropdown/tree/master/example)

Feel free to check out the repository and contribute on [GitHub](https://github.com/luismtapiab/ngx-multi-field-dropdown)! You can also find the package on [npm](https://www.npmjs.com/package/ngx-multi-field-dropdown).
