# Rules for Cline

This document outlines specific rules and conventions for the assistant to follow when working on this project.

## Branch Naming
Follow the conventions from the project's `.clinerules`:

```markdown
1. **Feature branches**: `feat/feature-name`
2. **Bugfix branches**: `fix/issue-description`
3. **Chore branches**: `chore/task-name`
4. **Experimental branches**: `experiment/experiment-name` or `wip/work-in-progress`
5. **Hotfix branches**: `hotfix/urgent-fix`
```

## Commit Messages
Use conventional commit format:

```
<type>(scope): short summary

Optional detailed description

Optional footer with issue references
```

### Commit Types
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `chore`: Build/maintenance tasks
- `refactor`: Code changes without functional impact
- `perf`: Performance improvements
- `test`: Test-related changes
- `ci`: CI configuration changes

### Examples
```
feat(ui): add dark mode toggle

Implement theme switching functionality using next-themes
```
```
fix(auth): resolve login token expiration

Closes #123
```

## Code Standards
1. Always use TypeScript types where possible
2. Follow Tailwind class ordering conventions
3. Use shadcn/ui components for consistency
4. Keep components small and focused
5. Add JSDoc comments for complex functions

## Workflow Guidelines
1. Create a new branch for each task
2. Make small, focused commits
3. Verify changes work before committing
4. Rebase against main before opening PRs
5. Delete branches after merging
