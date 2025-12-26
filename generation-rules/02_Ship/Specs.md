# Technical Specifications: {{PROJECT_NAME}}

**Project:** {{PROJECT_NAME}}
**Engineer:** {{ENGINEER_NAME}}
**Status:** {{STATUS}}
**Last Updated:** {{DATE}}

---

## Overview

{{2-3 sentences describing what is being built at a technical level.}}

---

## {{Component 1}}

### Data Model

```typescript
interface {{ComponentName}} {
  id: string;
  type: '{{type}}';
  // {{Add properties based on design}}
}
```

### Constraints

| Constraint | Value |
|------------|-------|
| {{Constraint 1}} | {{Value}} |
| {{Constraint 2}} | {{Value}} |
| {{Constraint 3}} | {{Value}} |

### Technical Requirements

**{{Category 1}}**
- {{Requirement}}
- {{Requirement}}

**{{Category 2}}**
- {{Requirement}}
- {{Requirement}}

**{{Category 3}}**
- {{Requirement}}
- {{Requirement}}

### Accessibility (WCAG 2.1 AA)

```html
<!-- Example markup structure -->
<div role="{{role}}" aria-label="{{label}}">
  <!-- {{Description}} -->
</div>
```

**Requirements:**
- {{Accessibility requirement 1}}
- {{Accessibility requirement 2}}
- {{Accessibility requirement 3}}

---

## {{Component 2}}

### Data Model

```typescript
interface {{ComponentName}} {
  id: string;
  type: '{{type}}';
  // {{Add properties based on design}}
}
```

### Constraints

| Constraint | Value |
|------------|-------|
| {{Constraint 1}} | {{Value}} |
| {{Constraint 2}} | {{Value}} |

### Technical Requirements

**{{Category 1}}**
- {{Requirement}}
- {{Requirement}}

**{{Category 2}}**
- {{Requirement}}
- {{Requirement}}

### Accessibility (WCAG 2.1 AA)

```html
<!-- Example markup structure -->
```

**Requirements:**
- {{Accessibility requirement 1}}
- {{Accessibility requirement 2}}

---

## Builder Integration

### Component Registration

```typescript
// Element palette configuration
category: '{{Category}}',
components: [
  {
    type: '{{type}}',
    label: '{{Label}}',
    icon: '{{icon}}',
    defaultConfig: { /* defaults */ }
  }
]
```

### Properties Panel

{{Description of how configuration is exposed in the builder.}}

---

## Email Fallback

### Sync Behavior

**{{Component 1}} Fallback:**
```typescript
function {{component}}ToEmail({{param}}): EmailContent {
  // {{Description of fallback logic}}
}
```

**{{Component 2}} Fallback:**
```typescript
function {{component}}ToEmail({{param}}): EmailContent {
  // {{Description of fallback logic}}
}
```

### Coordination

- {{Coordination item 1}}
- {{Coordination item 2}}

---

## Performance Requirements

| Metric | Target |
|--------|--------|
| First Contentful Paint | {{Target}} |
| Largest Contentful Paint | {{Target}} |
| Time to Interactive | {{Target}} |
| Bundle size | {{Target}} |

### Optimization

- {{Optimization 1}}
- {{Optimization 2}}
- {{Optimization 3}}

---

## Testing Requirements

### Unit Tests
- {{Test area 1}}
- {{Test area 2}}
- {{Test area 3}}

### Accessibility Tests
- {{Test area 1}}
- {{Test area 2}}

### Integration Tests
- {{Test area 1}}
- {{Test area 2}}

### Manual Testing
- {{Test area 1}}
- {{Test area 2}}

---

## Dependencies

| Dependency | Purpose | Status |
|------------|---------|--------|
| {{Dependency 1}} | {{Purpose}} | {{Status}} |
| {{Dependency 2}} | {{Purpose}} | {{Status}} |

---

## Timeline Estimate

| Phase | Duration |
|-------|----------|
| {{Phase 1}} | {{Duration}} |
| {{Phase 2}} | {{Duration}} |
| {{Phase 3}} | {{Duration}} |
| **Total** | **{{Total}}** |

---

## Open Questions

1. ~~{{Resolved question}}~~ → Resolved: {{Answer}}
2. {{Open question}}

---

**Generated from:** {{List of input files used}}
