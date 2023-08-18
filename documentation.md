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