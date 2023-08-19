This guide outlines the Git workflow rules for our project. The workflow follows a branch-based approach to manage changes and separate branches for different tasks or features.

Branch Structure
Our project uses a main main branch and a develop branch:

The main branch is updated at the end of each sprint to keep track of the stable releases.
The develop branch serves as the intermediate staging area for development and integration of new features and bug fixes.

Feature, bugs and Task Branches
For each task, create a new branch from the develop branch using the following naming convention:

<initials>/<task_type>/#<task_number>


For example: sk/feature/RSS-ECOMM-1_01

Commit Messages
After completing work in your task branch, create a commit with a descriptive message following this format:

[RSS-ECOMM-1_01] feat: add some description


If your commit addresses multiple tasks, include all relevant task numbers:

[RSS-ECOMM-1_01, RSS-ECOMM-1_02, RSS-ECOMM-1_03] feat: add some description


Pre-Commit Checks
Before committing your changes, run tests and the linter to ensure that your code meets the quality standards.

Rebasing
Before creating a pull request, rebase your task branch with the develop branch to incorporate any new changes and resolve potential merge conflicts.

Note: It is preferred to keep one commit per task branch. If you need to make changes after committing, use the --amend option when committing instead of creating multiple commits.

Pull Requests
Once your task branch is ready and tests pass, create a pull request against the develop branch.

Trello Task Management
After creating a pull request, move the corresponding task in Trello to the "Review" status and add a comment with the link to the pull request.

Naming conventions and folder structure for common files and folders in a project
When organizing your project files and folders, it is essential to follow specific naming conventions and maintain a consistent folder structure. This approach ensures better readability and maintainability. Here are some recommended guidelines for naming common files and folders in your project:

Folders
Folder names should be in lowercase and use hyphen-separated words. This naming style is known as kebab-case.
Example: nav-item.

Files
File names should start with an uppercase letter and use camel case (also known as Pascal case). In this naming style, each word starts with an uppercase letter, and there are no delimiters (such as hyphens) between the words.
Example: NavItem.ts.

Functions
Function names should also start with an uppercase letter and use camel case.
Example: NavItem.

Folder Structure
Each folder must contain an index.ts file that exports functions or components related to the folder's purpose. In our example, NavItem is the name of the function that creates a common element:

Content of index.ts
The index.ts file should re-export the function or component from the corresponding source file. In our example:

```typescript
export { NavItem } from './NavItem';


This single Markdown file combines the naming conventions and folder structure information, providing beginners with a comprehensive guide to organize their project files and folders.