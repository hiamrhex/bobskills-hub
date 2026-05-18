**User:**

<task>
Create a SKILL.md file at `.bob/skills/js-to-typescript/SKILL.md` for converting JavaScript to fully typed TypeScript.

**Task Requirements:**
1. Create the directory structure `.bob/skills/js-to-typescript/` if it doesn't exist
2. Create a SKILL.md file with the following structure:

**Frontmatter (YAML format):**
- name: "JavaScript to TypeScript Converter"
- slug: "js-to-typescript"
- description: A comprehensive description about converting JavaScript code to fully typed TypeScript
- version: "1.0.0"
- tags: Include relevant tags like ["typescript", "javascript", "conversion", "types"]

**Content Sections:**
- A clear overview of what this skill does
- Detailed instructions on how to use this skill for converting JS to TS
- Include `<Steps>` tags that outline the conversion process step-by-step (e.g., analyzing JS code, adding type annotations, handling interfaces, converting classes, etc.)
- Best practices for TypeScript conversion
- Common pitfalls to avoid

**Important Instructions:**
- Only create the file at `.bob/skills/js-to-typescript/SKILL.md`
- Ensure the frontmatter is properly formatted with YAML syntax (between `---` delimiters)
- Make the Steps section comprehensive and actionable
- Do not modify any other files
- These specific instructions supersede any conflicting general instructions

When complete, use the `attempt_completion` tool with a concise summary of what was created in the `result` parameter.
</task>
<environment_details>
# VSCode Visible Files


# VSCode Open Tabs
client/src/components/SearchBar.jsx,client/src/components/CategoryFilter.jsx,client/src/components/SkillCard.jsx,client/src/components/SkillGrid.jsx,client/src/components/InstallCommand.jsx,server/routes/skills.js,server/data/skills.json,client/src/components/Icons.jsx,client/src/hooks/useScrollReveal.js,client/src/components/BobPreview.jsx,client/src/index.css,server/package.json,client/src/components/SkillModal.jsx,client/src/main.jsx,server/.env,server/routes/preview.js,server/index.js,client/index.html,client/package.json,README.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-16T20:18:24.277Z
User time zone: Africa/Lagos, UTC+1:00

# Current Cost
$0.00

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>


# Current Workspace Directory (c:/Users/HP/bobskills) Files
.gitignore
LICENSE
package-lock.json
README.md
SETUP_GUIDE.md
bob_sessions/
bob_sessions/README.md
client/
client/.env.example
client/index.html
client/package-lock.json
client/package.json
client/vite.config.js
client/public/
client/src/
client/src/App.jsx
client/src/index.css
client/src/main.jsx
client/src/components/
client/src/components/BobPreview.jsx
client/src/components/CategoryFilter.jsx
client/src/components/Icons.jsx
client/src/components/InstallCommand.jsx
client/src/components/SearchBar.jsx
client/src/components/SkillCard.jsx
client/src/components/SkillGrid.jsx
client/src/components/SkillModal.jsx
client/src/hooks/
client/src/hooks/useScrollReveal.js
server/
server/.env.example
server/index.js
server/package-lock.json
server/package.json
server/data/
server/data/skills.json
server/routes/
server/routes/preview.js
server/routes/skills.js
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

I'll help you create the SKILL.md file for converting JavaScript to TypeScript. Let me start by creating the directory structure and then the file.

<execute_command>
<command>mkdir -p .bob/skills/js-to-typescript</command>
</execute_command>

---

**User:**

[execute_command for 'mkdir -p .bob/skills/js-to-typescript'] Result:
Command executed in terminal  within working directory 'c:/Users/HP/bobskills'. Exit code: 0
Output:


    Directory: C:\Users\HP\bobskills\.bob\skills


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
d-----         5/16/2026   9:19 PM                js-to-typescript                                                     



<environment_details>
# VSCode Visible Files
server\.env

# VSCode Open Tabs
client/src/components/SearchBar.jsx,client/src/components/CategoryFilter.jsx,client/src/components/SkillCard.jsx,client/src/components/SkillGrid.jsx,client/src/components/InstallCommand.jsx,server/routes/skills.js,server/data/skills.json,client/src/components/Icons.jsx,client/src/hooks/useScrollReveal.js,client/src/components/BobPreview.jsx,client/src/index.css,server/package.json,client/src/components/SkillModal.jsx,client/src/main.jsx,server/.env,server/routes/preview.js,server/index.js,client/index.html,client/package.json,README.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-16T20:19:52.265Z
User time zone: Africa/Lagos, UTC+1:00

# Current Cost
$0.01

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<write_to_file>
<path>.bob/skills/js-to-typescript/SKILL.md</path>
<content>---
name: "JavaScript to TypeScript Converter"
slug: "js-to-typescript"
description: "A comprehensive skill for converting JavaScript code to fully typed TypeScript with proper type annotations, interfaces, and type safety. This skill guides you through the complete conversion process, ensuring your codebase benefits from TypeScript's static typing and enhanced developer experience."
version: "1.0.0"
tags: ["typescript", "javascript", "conversion", "types", "migration", "type-safety", "refactoring"]
---

# JavaScript to TypeScript Converter

## Overview

This skill provides a systematic approach to converting JavaScript code to fully typed TypeScript. It ensures that your converted code leverages TypeScript's powerful type system, including proper type annotations, interfaces, generics, and advanced TypeScript features. The conversion process maintains code functionality while adding comprehensive type safety.

## What This Skill Does

- Analyzes existing JavaScript code structure and patterns
- Adds appropriate type annotations to variables, functions, and parameters
- Creates TypeScript interfaces and types for complex data structures
- Converts JavaScript classes to TypeScript with proper typing
- Handles module imports/exports with correct TypeScript syntax
- Implements generics where applicable for reusable code
- Ensures strict type checking compliance
- Maintains code readability and best practices

## How to Use This Skill

When you need to convert JavaScript code to TypeScript, provide the JavaScript file(s) or code snippets you want to convert. The skill will analyze the code and perform a comprehensive conversion following TypeScript best practices.

### Usage Examples

**Example 1: Convert a single file**
```
Convert src/utils/helpers.js to TypeScript
```

**Example 2: Convert multiple related files**
```
Convert all files in src/components/ to TypeScript, starting with the base components
```

**Example 3: Convert with specific requirements**
```
Convert src/api/client.js to TypeScript using strict mode and add proper error types
```

<Steps>

## Step 1: Analyze the JavaScript Code

- Read and understand the existing JavaScript code structure
- Identify all functions, classes, variables, and their usage patterns
- Note any external dependencies and their type definitions
- Identify data structures that need interface definitions
- Check for any existing JSDoc comments that hint at types

## Step 2: Set Up TypeScript Configuration

- Ensure `tsconfig.json` exists with appropriate compiler options
- Enable strict mode for maximum type safety (`"strict": true`)
- Configure module resolution and target ECMAScript version
- Set up path mappings if needed for imports

## Step 3: Rename Files

- Change file extensions from `.js` to `.ts`
- Use `.tsx` for files containing JSX/React components
- Update import statements to reflect new file extensions

## Step 4: Add Basic Type Annotations

- Add type annotations to function parameters
- Specify return types for all functions
- Type all variable declarations where type inference isn't sufficient
- Use `const` assertions where appropriate for literal types

## Step 5: Create Interfaces and Types

- Define interfaces for object shapes and data structures
- Create type aliases for union types, intersections, and complex types
- Use `enum` for sets of named constants
- Define custom types for function signatures and callbacks

## Step 6: Convert Classes

- Add type annotations to class properties
- Type constructor parameters and methods
- Implement interfaces where appropriate
- Use access modifiers (`public`, `private`, `protected`)
- Add generic type parameters for reusable classes

## Step 7: Handle External Dependencies

- Install type definitions for third-party libraries (`@types/package-name`)
- Create custom type declarations for libraries without types
- Use module augmentation if needed to extend existing types

## Step 8: Implement Advanced TypeScript Features

- Use generics for reusable, type-safe functions and classes
- Apply utility types (`Partial`, `Pick`, `Omit`, `Record`, etc.)
- Implement type guards for runtime type checking
- Use discriminated unions for complex state management
- Apply mapped types and conditional types where beneficial

## Step 9: Handle Edge Cases

- Type `any` usage with proper types or `unknown`
- Add type assertions only when necessary and safe
- Handle null/undefined with optional chaining and nullish coalescing
- Use non-null assertion operator (`!`) sparingly and only when certain

## Step 10: Validate and Refine

- Run TypeScript compiler to check for type errors
- Fix all type errors and warnings
- Ensure no implicit `any` types remain
- Verify that strict mode passes without errors
- Test the converted code to ensure functionality is preserved

</Steps>

## Best Practices for TypeScript Conversion

### 1. Start with Strict Mode
Enable TypeScript's strict mode from the beginning to catch potential issues early and ensure maximum type safety.

### 2. Prefer Interfaces Over Type Aliases for Objects
Use interfaces for object shapes as they're more extensible and provide better error messages.

```typescript
// Preferred
interface User {
  id: number;
  name: string;
  email: string;
}

// Use type aliases for unions, intersections, or primitives
type Status = 'active' | 'inactive' | 'pending';
```

### 3. Use Explicit Return Types
Always specify return types for functions to catch errors and improve code documentation.

```typescript
function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}
```

### 4. Leverage Type Inference
Don't over-annotate; let TypeScript infer types when it's obvious.

```typescript
// Good - type is inferred
const count = 5;

// Unnecessary
const count: number = 5;
```

### 5. Use Readonly for Immutable Data
Mark properties as readonly when they shouldn't be modified after initialization.

```typescript
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}
```

### 6. Avoid `any` Type
Replace `any` with proper types, `unknown`, or generics to maintain type safety.

```typescript
// Bad
function process(data: any): any {
  return data;
}

// Good
function process<T>(data: T): T {
  return data;
}
```

### 7. Use Union Types for Multiple Possibilities
Leverage union types instead of loose typing.

```typescript
type Result = Success | Error;
type Status = 'loading' | 'success' | 'error';
```

### 8. Create Utility Types for Common Patterns
Define reusable utility types for your domain.

```typescript
type Nullable<T> = T | null;
type Optional<T> = T | undefined;
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};
```

## Common Pitfalls to Avoid

### 1. Over-using Type Assertions
Type assertions (`as Type`) bypass type checking and should be used sparingly.

```typescript
// Avoid
const user = data as User;

// Better - validate the data
function isUser(data: unknown): data is User {
  return typeof data === 'object' && data !== null && 'id' in data;
}
```

### 2. Ignoring Null/Undefined
Always handle potential null or undefined values properly.

```typescript
// Bad
function getName(user: User): string {
  return user.name; // What if user is null?
}

// Good
function getName(user: User | null): string {
  return user?.name ?? 'Unknown';
}
```

### 3. Not Using Discriminated Unions
For complex state, use discriminated unions instead of optional properties.

```typescript
// Bad
interface State {
  loading?: boolean;
  data?: Data;
  error?: Error;
}

// Good
type State = 
  | { status: 'loading' }
  | { status: 'success'; data: Data }
  | { status: 'error'; error: Error };
```

### 4. Mixing Interfaces and Implementation
Keep type definitions separate from implementation logic.

```typescript
// Bad - mixing concerns
interface User {
  id: number;
  getName(): string; // implementation detail
}

// Good - separate interface and implementation
interface User {
  id: number;
  name: string;
}

class UserImpl implements User {
  constructor(public id: number, public name: string) {}
  getName(): string {
    return this.name;
  }
}
```

### 5. Not Leveraging Type Guards
Use type guards for runtime type checking instead of type assertions.

```typescript
function processValue(value: string | number) {
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }
  // TypeScript knows value is number here
  return value.toFixed(2);
}
```

### 6. Forgetting to Update Tests
When converting to TypeScript, update test files and add proper typing to test utilities.

### 7. Not Using Generics When Appropriate
Generics provide type safety for reusable code without sacrificing flexibility.

```typescript
// Bad - loses type information
function getFirst(arr: any[]): any {
  return arr[0];
}

// Good - preserves type information
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

### 8. Incomplete Type Definitions
Ensure all properties and methods are properly typed, including optional ones.

```typescript
// Incomplete
interface User {
  id: number;
  name: string;
}

// Complete
interface User {
  id: number;
  name: string;
  email?: string; // optional property
  createdAt: Date;
  updatedAt: Date;
}
```

## Additional Resources

- **TypeScript Handbook**: Official TypeScript documentation
- **TypeScript Deep Dive**: Comprehensive guide to TypeScript
- **DefinitelyTyped**: Repository of TypeScript type definitions
- **TSConfig Reference**: Complete guide to TypeScript configuration

## Notes

- Always test converted code thoroughly to ensure functionality is preserved
- Consider converting incrementally for large codebases
- Use `// @ts-ignore` or `// @ts-expect-error` only as a last resort
- Keep TypeScript version updated for latest features and improvements
- Document complex types with JSDoc comments for better IDE support
</content>
<line_count>329</line_count>
</write_to_file>

---

**User:**

[write_to_file for '.bob/skills/js-to-typescript/SKILL.md'] Result:
<file_write_result>
<path>.bob/skills/js-to-typescript/SKILL.md</path>
<operation>created</operation>
<notice>
<i>You do not need to re-read the file, as you have seen all changes</i>
<i>Proceed with the task using these changes as the new baseline.</i>
</notice>
</file_write_result>

<environment_details>
# VSCode Visible Files
.bob\skills\js-to-typescript\SKILL.md

# VSCode Open Tabs
client/src/components/SearchBar.jsx,client/src/components/CategoryFilter.jsx,client/src/components/SkillCard.jsx,client/src/components/SkillGrid.jsx,client/src/components/InstallCommand.jsx,server/routes/skills.js,server/data/skills.json,client/src/components/Icons.jsx,client/src/hooks/useScrollReveal.js,client/src/components/BobPreview.jsx,client/src/index.css,server/package.json,client/src/components/SkillModal.jsx,client/src/main.jsx,server/.env,.bob/skills/js-to-typescript/SKILL.md,server/routes/preview.js,server/index.js,client/index.html,client/package.json

# Current Time
Current time in ISO 8601 UTC format: 2026-05-16T20:22:57.082Z
User time zone: Africa/Lagos, UTC+1:00

# Current Cost
$0.03

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<attempt_completion>
<result>
Successfully created the JavaScript to TypeScript Converter skill file at `.bob/skills/js-to-typescript/SKILL.md`.

The file includes:
- ✅ Properly formatted YAML frontmatter with name, slug, description, version, and tags
- ✅ Comprehensive overview of the skill's purpose
- ✅ Detailed usage instructions with examples
- ✅ 10-step conversion process within `<Steps>` tags covering:
  - Code analysis
  - TypeScript configuration
  - File renaming
  - Type annotations
  - Interface/type creation
  - Class conversion
  - Dependency handling
  - Advanced TypeScript features
  - Edge case handling
  - Validation and refinement
- ✅ Best practices section with 8 key recommendations
- ✅ Common pitfalls section with 8 detailed warnings and examples
- ✅ Additional resources and notes

The skill provides a complete, actionable guide for converting JavaScript code to fully typed TypeScript with proper type safety and best practices.
</result>
</attempt_completion>

