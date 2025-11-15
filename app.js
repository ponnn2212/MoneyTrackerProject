// i18n Translations
const translations = {
    th: {
        app_title: 'บันทึกรายรับรายจ่าย',
        nav_add: 'เพิ่ม',
        nav_accounts: 'บัญชี',
        nav_statistics: 'สถิติ',
        nav_settings: 'ตั้งค่า',
        total_balance: 'ยอดรวมทั้งหมด',
        monthly_income: 'รายรับเดือนนี้',
        monthly_expense: 'รายจ่ายเดือนนี้',
        savings_goals: 'เป้าหมายการออม',
        view_all: 'ดูทั้งหมด',
        recent_transactions: 'รายการล่าสุด',
        expense_by_category: 'กราฟรายจ่ายตามหมวด',
        quick_menu: 'เมนูด่วน',
        add_transaction: 'เพิ่มรายการ',
        accounts: 'บัญชี',
        statistics: 'สถิติ',
        budget: 'งบประมาณ',
        goals: 'เป้าหมาย',
        challenges: 'ชาเลนจ์',
        lending: 'ยืม/ให้ยืม',
        settings: 'ตั้งค่า',
        add_account: 'เพิ่มบัญชี',
        transfer_money: 'โอนเงินระหว่างบัญชี',
        from_account: 'จากบัญชี',
        to_account: 'ไปยังบัญชี',
        amount: 'จำนวนเงิน',
        transfer: 'โอนเงิน',
        add_budget: 'เพิ่มงบประมาณ',
        add_goal: 'เพิ่มเป้าหมาย',
        add_lending: 'เพิ่มรายการ',
        type: 'ประเภท',
        income: 'รายรับ',
        expense: 'รายจ่าย',
        category: 'หมวดหมู่',
        date: 'วันที่',
        note: 'โน้ต',
        save: 'บันทึก',
        cancel: 'ยกเลิก',
        no_data: 'ยังไม่มีข้อมูล',
        no_goals: 'ยังไม่มีเป้าหมาย',
        no_budgets: 'ยังไม่มีงบประมาณ',
        no_lending: 'ยังไม่มีรายการยืม/ให้ยืม',
        used: 'ใช้ไป',
        from: 'จาก',
        target: 'เป้าหมาย',
        end_date: 'วันสิ้นสุด',
        days_left: 'วัน',
        notifications: 'การแจ้งเตือน',
        budget_alert: 'แจ้งเตือนเมื่อใช้งบเกิน',
        goal_alert: 'แจ้งเตือนเมื่อใกล้เป้าหมาย',
        data: 'ข้อมูล',
        export_csv: 'ส่งออก CSV',
        import_csv: 'นำเข้า CSV',
        borrow: 'ยืม',
        lend: 'ให้ยืม',
        person_name: 'ชื่อคน',
        due_date: 'วันที่ครบกำหนด',
        paid: 'ชำระแล้ว',
        status: 'สถานะ',
        pending: 'รอชำระ',
        completed: 'ชำระครบ',
        overdue: 'เกินกำหนด',
        weekly: 'รายสัปดาห์',
        monthly: 'รายเดือน',
        challenge_game: 'ชาเลนจ์และเกม',
        mini_game: 'มินิเกม: ดวงไฟการออม',
        game_description: 'ออมเงินตามเป้าหมายทุกวันเพื่อให้ไฟสว่าง!',
        consecutive_days: 'ออมต่อเนื่อง',
        daily_target: 'บาท/วัน',
        no_active_goal: 'ไม่มีเป้าหมายที่ใช้งานอยู่',
        create_goal: 'สร้างเป้าหมายเพื่อเริ่มเกม'
    },
    en: {
        app_title: 'Money Tracker',
        nav_add: 'Add',
        nav_accounts: 'Accounts',
        nav_statistics: 'Statistics',
        nav_settings: 'Settings',
        total_balance: 'Total Balance',
        monthly_income: 'Monthly Income',
        monthly_expense: 'Monthly Expense',
        savings_goals: 'Savings Goals',
        view_all: 'View All',
        recent_transactions: 'Recent Transactions',
        expense_by_category: 'Expense by Category',
        quick_menu: 'Quick Menu',
        add_transaction: 'Add Transaction',
        accounts: 'Accounts',
        statistics: 'Statistics',
        budget: 'Budget',
        goals: 'Goals',
        challenges: 'Challenges',
        lending: 'Lending',
        settings: 'Settings',
        add_account: 'Add Account',
        transfer_money: 'Transfer Money',
        from_account: 'From Account',
        to_account: 'To Account',
        amount: 'Amount',
        transfer: 'Transfer',
        add_budget: 'Add Budget',
        add_goal: 'Add Goal',
        add_lending: 'Add Record',
        type: 'Type',
        income: 'Income',
        expense: 'Expense',
        category: 'Category',
        date: 'Date',
        note: 'Note',
        save: 'Save',
        cancel: 'Cancel',
        no_data: 'No data yet',
        no_goals: 'No goals yet',
        no_budgets: 'No budgets yet',
        no_lending: 'No lending records yet',
        used: 'Used',
        from: 'from',
        target: 'Target',
        end_date: 'End Date',
        days_left: 'days',
        notifications: 'Notifications',
        budget_alert: 'Alert when budget exceeded',
        goal_alert: 'Alert when near goal',
        data: 'Data',
        export_csv: 'Export CSV',
        import_csv: 'Import CSV',
        borrow: 'Borrow',
        lend: 'Lend',
        person_name: 'Person Name',
        due_date: 'Due Date',
        paid: 'Paid',
        status: 'Status',
        pending: 'Pending',
        completed: 'Completed',
        overdue: 'Overdue',
        weekly: 'Weekly',
        monthly: 'Monthly',
        challenge_game: 'Challenges & Games',
        mini_game: 'Mini Game: Savings Light',
        game_description: 'Save money daily according to your goal to light up!',
        consecutive_days: 'Consecutive days',
        daily_target: 'baht/day',
        no_active_goal: 'No active goal',
        create_goal: 'Create a goal to start the game'
    }
};

// Data Management
class MoneyTracker {
    constructor() {
        this.data = this.loadData();
        this.currentLang = this.data.settings.language || 'th';
        this.init();
    }

    loadData() {
        const saved = localStorage.getItem('moneyTrackerData');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            accounts: [
                { id: 1, name: 'ใช้จ่าย', balance: 0, color: '#4a90e2' },
                { id: 2, name: 'ออม', balance: 0, color: '#50c878' },
                { id: 3, name: 'รายได้พิเศษ', balance: 0, color: '#7b68ee' }
            ],
            transactions: [],
            categories: {
                income: ['เงินเดือน', 'รายได้พิเศษ', 'เงินออม', 'อื่นๆ'],
                expense: ['อาหาร', 'เดินทาง', 'หนังสือ', 'บันเทิง', 'เสื้อผ้า', 'อื่นๆ']
            },
            budgets: [],
            goals: [],
            challenges: [],
            lending: [],
            settings: {
                theme: 'light',
                hideBalance: false,
                budgetAlert: true,
                goalAlert: true,
                autoSplit: { spending: 60, savings: 30, extra: 10 },
                language: 'th'
            }
        };
    }

    saveData() {
        localStorage.setItem('moneyTrackerData', JSON.stringify(this.data));
    }

    init() {
        this.setupEventListeners();
        this.loadTheme();
        this.loadLanguage();
        this.updateUI();
        this.setupDateInput();
    }

    t(key) {
        return translations[this.currentLang]?.[key] || key;
    }

    loadLanguage() {
        document.documentElement.lang = this.currentLang;
        this.updateTranslations();
    }

    updateTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'th' ? 'en' : 'th';
        this.data.settings.language = this.currentLang;
        this.saveData();
        document.documentElement.lang = this.currentLang;
        this.updateTranslations();
        this.updateUI();
    }

    setupDateInput() {
        const dateInput = document.getElementById('date');
        if (dateInput) {
            dateInput.value = new Date().toISOString().split('T')[0];
        }
    }

    setupEventListeners() {
        // Language toggle
        document.getElementById('languageToggle')?.addEventListener('click', () => {
            this.toggleLanguage();
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Hide balance toggle
        document.getElementById('hideBalanceToggle')?.addEventListener('click', () => {
            this.toggleHideBalance();
        });

        // Transfer form will be handled in modal

        // Account management
        document.getElementById('addAccountBtn')?.addEventListener('click', () => {
            this.showAddAccountModal();
        });

        // Budget management
        document.getElementById('addBudgetBtn')?.addEventListener('click', () => {
            this.showAddBudgetModal();
        });

        // Goal management
        document.getElementById('addGoalBtn')?.addEventListener('click', () => {
            this.showAddGoalModal();
        });

        // Lending management
        document.getElementById('addLendingBtn')?.addEventListener('click', () => {
            this.showAddLendingModal();
        });

        // Export/Import
        document.getElementById('exportBtn')?.addEventListener('click', () => {
            this.exportCSV();
        });

        document.getElementById('importBtn')?.addEventListener('click', () => {
            document.getElementById('importFile')?.click();
        });

        document.getElementById('importFile')?.addEventListener('change', (e) => {
            this.importCSV(e.target.files[0]);
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Modal close
        document.getElementById('closeModal')?.addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('modalOverlay')?.addEventListener('click', (e) => {
            if (e.target.id === 'modalOverlay') {
                this.closeModal();
            }
        });
    }

    showView(viewName) {
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        const view = document.getElementById(viewName);
        const navItem = document.querySelector(`[data-view="${viewName}"]`);
        
        if (view) view.classList.add('active');
        if (navItem) navItem.classList.add('active');

        this.updateUI();
        
        // Redraw charts after a short delay to ensure view is visible
        setTimeout(() => {
            this.updateCharts();
        }, 100);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        this.data.settings.theme = newTheme;
        this.saveData();
    }

    loadTheme() {
        const theme = this.data.settings.theme || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }

    toggleHideBalance() {
        this.data.settings.hideBalance = !this.data.settings.hideBalance;
        this.saveData();
        this.updateBalanceDisplay();
    }

    updateBalanceDisplay() {
        const balanceEl = document.getElementById('totalBalance');
        if (balanceEl) {
            if (this.data.settings.hideBalance) {
                balanceEl.classList.add('hidden');
                balanceEl.textContent = '฿••••';
            } else {
                balanceEl.classList.remove('hidden');
                const total = this.data.accounts.reduce((sum, acc) => sum + acc.balance, 0);
                balanceEl.textContent = `฿${total.toFixed(2)}`;
            }
        }
    }

    addTransaction() {
        const form = document.getElementById('transactionForm');
        const formData = new FormData(form);
        
        const transaction = {
            id: Date.now(),
            type: formData.get('type'),
            amount: parseFloat(formData.get('amount')),
            accountId: parseInt(formData.get('account')),
            category: formData.get('category'),
            date: formData.get('date'),
            note: formData.get('note') || '',
            timestamp: new Date().toISOString()
        };

        // Update account balance
        const account = this.data.accounts.find(a => a.id === transaction.accountId);
        if (account) {
            if (transaction.type === 'income') {
                account.balance += transaction.amount;
            } else {
                account.balance -= transaction.amount;
            }
        }

        this.data.transactions.push(transaction);
        this.saveData();
        form.reset();
        this.setupDateInput();
        this.updateUI();
        this.showNotification('บันทึกรายการสำเร็จ!');
    }

    transferMoney() {
        const fromId = parseInt(document.getElementById('fromAccount').value);
        const toId = parseInt(document.getElementById('toAccount').value);
        const amount = parseFloat(document.getElementById('transferAmount').value);

        if (fromId === toId) {
            this.showNotification('ไม่สามารถโอนไปยังบัญชีเดียวกันได้', 'error');
            return;
        }

        const fromAccount = this.data.accounts.find(a => a.id === fromId);
        const toAccount = this.data.accounts.find(a => a.id === toId);

        if (!fromAccount || !toAccount) return;
        if (fromAccount.balance < amount) {
            this.showNotification('ยอดเงินไม่พอ', 'error');
            return;
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        // Record transfer as transactions
        const now = new Date().toISOString();
        this.data.transactions.push({
            id: Date.now(),
            type: 'expense',
            amount: amount,
            accountId: fromId,
            category: 'โอนเงิน',
            date: new Date().toISOString().split('T')[0],
            note: `โอนไปยัง ${toAccount.name}`,
            timestamp: now
        });

        this.data.transactions.push({
            id: Date.now() + 1,
            type: 'income',
            amount: amount,
            accountId: toId,
            category: 'โอนเงิน',
            date: new Date().toISOString().split('T')[0],
            note: `รับจาก ${fromAccount.name}`,
            timestamp: now
        });

        this.saveData();
        document.getElementById('transferForm').reset();
        this.updateUI();
        this.showNotification('โอนเงินสำเร็จ!');
    }

    updateUI() {
        this.updateDashboard();
        this.updateAccounts();
        this.updateTransactions();
        this.updateCategories();
        this.updateBudgets();
        this.updateGoals();
        this.updateChallenges();
        this.updateLending();
        this.updateCharts();
    }

    updateDashboard() {
        // Total balance
        this.updateBalanceDisplay();

        // Accounts summary
        const accountsSummary = document.getElementById('accountsSummary');
        if (accountsSummary) {
            accountsSummary.innerHTML = this.data.accounts.map(acc => `
                <div class="account-summary-item">
                    <h4>${acc.name}</h4>
                    <p class="amount">฿${this.data.settings.hideBalance ? '••••' : acc.balance.toFixed(2)}</p>
                </div>
            `).join('');
        }

        // Monthly stats
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const monthlyTransactions = this.data.transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
        });

        const monthlyIncome = monthlyTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);

        const monthlyExpense = monthlyTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);

        const incomeEl = document.getElementById('monthlyIncome');
        const expenseEl = document.getElementById('monthlyExpense');
        if (incomeEl) incomeEl.textContent = `฿${monthlyIncome.toFixed(2)}`;
        if (expenseEl) expenseEl.textContent = `฿${monthlyExpense.toFixed(2)}`;

        // Recent transactions
        this.updateRecentTransactions();

        // Goals
        this.updateGoalsList();
    }

    updateRecentTransactions() {
        const recentEl = document.getElementById('recentTransactions');
        if (!recentEl) return;

        const recent = [...this.data.transactions]
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, 5);

        if (recent.length === 0) {
            recentEl.innerHTML = `<div class="empty-state"><p>${this.t('no_data')}</p></div>`;
            return;
        }

        recentEl.innerHTML = recent.map(t => {
            const account = this.data.accounts.find(a => a.id === t.accountId);
            return `
                <div class="transaction-item ${t.type}">
                    <div class="transaction-info">
                        <h4>${t.category}</h4>
                        <p>${account?.name || ''} • ${this.formatDate(t.date)}</p>
                        ${t.note ? `<p class="text-secondary">${t.note}</p>` : ''}
                    </div>
                    <div class="transaction-amount ${t.type}">
                        ${t.type === 'income' ? '+' : '-'}฿${t.amount.toFixed(2)}
                    </div>
                </div>
            `;
        }).join('');
    }

    updateAccounts() {
        const accountsList = document.getElementById('accountsList');
        if (!accountsList) return;

        accountsList.innerHTML = this.data.accounts.map(acc => `
            <div class="account-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3>${acc.name}</h3>
                        <p class="balance-amount" style="font-size: 1.5rem;">
                            ฿${this.data.settings.hideBalance ? '••••' : acc.balance.toFixed(2)}
                        </p>
                    </div>
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: ${acc.color};"></div>
                </div>
            </div>
        `).join('');

        // Update select options
        const accountSelects = document.querySelectorAll('#account, #fromAccount, #toAccount');
        accountSelects.forEach(select => {
            select.innerHTML = this.data.accounts.map(acc => 
                `<option value="${acc.id}">${acc.name}</option>`
            ).join('');
        });
    }

    updateCategories() {
        const type = document.querySelector('input[name="type"]:checked')?.value || 'income';
        const categorySelect = document.getElementById('category');
        if (!categorySelect) return;

        const categories = this.data.categories[type] || [];
        categorySelect.innerHTML = categories.map(cat => 
            `<option value="${cat}">${cat}</option>`
        ).join('');

        // Update when type changes
        document.querySelectorAll('input[name="type"]').forEach(radio => {
            radio.addEventListener('change', () => {
                this.updateCategories();
            });
        });
    }

    updateTransactions() {
        // This is handled by updateRecentTransactions
    }

    updateBudgets() {
        const budgetsList = document.getElementById('budgetsList');
        if (!budgetsList) return;

        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        if (this.data.budgets.length === 0) {
            budgetsList.innerHTML = '<div class="empty-state"><p>ยังไม่มีงบประมาณ</p></div>';
            return;
        }

        budgetsList.innerHTML = this.data.budgets.map(budget => {
            const monthlyTransactions = this.data.transactions.filter(t => {
                const tDate = new Date(t.date);
                return t.type === 'expense' &&
                       t.category === budget.category &&
                       tDate.getMonth() === currentMonth &&
                       tDate.getFullYear() === currentYear;
            });

            const used = monthlyTransactions.reduce((sum, t) => sum + t.amount, 0);
            const percentage = (used / budget.amount) * 100;
            const status = percentage >= 100 ? 'exceeded' : percentage >= 80 ? 'warning' : '';

            return `
                <div class="budget-card">
                    <h3>${budget.category}</h3>
                    <div class="budget-usage">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span>ใช้ไป: ฿${used.toFixed(2)}</span>
                            <span class="${status}">จาก ฿${budget.amount.toFixed(2)}</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(percentage, 100)}%">
                                ${percentage.toFixed(0)}%
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateGoals() {
        this.updateGoalsList();
        this.updateGoalsListFull();
    }

    updateGoalsList() {
        const goalsList = document.getElementById('goalsList');
        if (!goalsList) return;

        if (this.data.goals.length === 0) {
            goalsList.innerHTML = `<div class="empty-state"><p>${this.t('no_goals')}</p></div>`;
            return;
        }

        goalsList.innerHTML = this.data.goals.slice(0, 3).map(goal => {
            const account = this.data.accounts.find(a => a.id === goal.accountId);
            const progress = account ? (account.balance / goal.target) * 100 : 0;
            const daysLeft = Math.ceil((new Date(goal.endDate) - new Date()) / (1000 * 60 * 60 * 24));

            return `
                <div class="goal-card">
                    <h3>${goal.name}</h3>
                    <p>เป้าหมาย: ฿${goal.target.toFixed(2)}</p>
                    <p>วันสิ้นสุด: ${this.formatDate(goal.endDate)} (${daysLeft} วัน)</p>
                    <div class="goal-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(progress, 100)}%">
                                ${progress.toFixed(0)}%
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateGoalsListFull() {
        const goalsListFull = document.getElementById('goalsListFull');
        if (!goalsListFull) return;

        if (this.data.goals.length === 0) {
            goalsListFull.innerHTML = `<div class="empty-state"><p>${this.t('no_goals')}</p></div>`;
            return;
        }

        goalsListFull.innerHTML = this.data.goals.map(goal => {
            const account = this.data.accounts.find(a => a.id === goal.accountId);
            const progress = account ? (account.balance / goal.target) * 100 : 0;
            const daysLeft = Math.ceil((new Date(goal.endDate) - new Date()) / (1000 * 60 * 60 * 24));

            return `
                <div class="goal-card">
                    <h3>${goal.name}</h3>
                    <p>เป้าหมาย: ฿${goal.target.toFixed(2)}</p>
                    <p>วันสิ้นสุด: ${this.formatDate(goal.endDate)} (${daysLeft} วัน)</p>
                    <div class="goal-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(progress, 100)}%">
                                ${progress.toFixed(0)}%
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateChallenges() {
        const challengesList = document.getElementById('challengesList');
        if (!challengesList) return;

        // Initialize default challenges if empty
        if (this.data.challenges.length === 0) {
            this.data.challenges = [
                {
                    id: 1,
                    name: 'ไม่ซื้อกาแฟ 5 วัน',
                    type: 'no_spend',
                    target: 5,
                    current: 0,
                    reward: 100
                },
                {
                    id: 2,
                    name: 'ออมวันละ 20 บาท',
                    type: 'daily_save',
                    target: 7,
                    current: 0,
                    amount: 20,
                    reward: 150
                }
            ];
            this.saveData();
        }

        challengesList.innerHTML = this.data.challenges.map(challenge => {
            const progress = (challenge.current / challenge.target) * 100;
            return `
                <div class="goal-card">
                    <h3>${challenge.name}</h3>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%">
                            ${challenge.current}/${challenge.target}
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Update mini-game
        this.updateMiniGame();
    }

    updateMiniGame() {
        const lightBulbs = document.getElementById('lightBulbs');
        const gameStatus = document.getElementById('gameStatus');
        if (!lightBulbs || !gameStatus) return;

        // Get active goal for the game
        const activeGoal = this.data.goals.find(g => {
            const endDate = new Date(g.endDate);
            return endDate > new Date();
        });

        if (!activeGoal) {
            lightBulbs.innerHTML = '<p>ไม่มีเป้าหมายที่ใช้งานอยู่</p>';
            gameStatus.textContent = 'สร้างเป้าหมายเพื่อเริ่มเกม';
            return;
        }

        const account = this.data.accounts.find(a => a.id === activeGoal.accountId);
        const dailyTarget = activeGoal.target / 30; // Assume 30 days
        const today = new Date().toISOString().split('T')[0];
        
        // Count consecutive days of saving
        let consecutiveDays = 0;
        const transactions = this.data.transactions
            .filter(t => t.accountId === activeGoal.accountId && t.type === 'income')
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        // Simple logic: count days with savings
        const daysWithSavings = new Set();
        transactions.forEach(t => {
            if (t.amount >= dailyTarget) {
                daysWithSavings.add(t.date);
            }
        });

        consecutiveDays = daysWithSavings.size;

        // Create light bulbs (max 30)
        const bulbs = Math.min(consecutiveDays, 30);
        lightBulbs.innerHTML = '';
        for (let i = 0; i < 30; i++) {
            const bulb = document.createElement('div');
            bulb.className = `light-bulb ${i < bulbs ? 'on' : ''}`;
            bulb.textContent = i < bulbs ? '💡' : '⚫';
            lightBulbs.appendChild(bulb);
        }

        gameStatus.textContent = `ออมต่อเนื่อง ${consecutiveDays} วัน (เป้าหมาย: ${dailyTarget.toFixed(2)} บาท/วัน)`;
    }

    updateLending() {
        const lendingList = document.getElementById('lendingList');
        if (!lendingList) return;

        if (this.data.lending.length === 0) {
            lendingList.innerHTML = `<div class="empty-state"><p>${this.t('no_lending')}</p></div>`;
            return;
        }

        lendingList.innerHTML = this.data.lending.map(lend => {
            const dueDate = new Date(lend.dueDate);
            const now = new Date();
            const daysLeft = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));
            const status = lend.paid >= lend.amount ? 'completed' : 
                          daysLeft < 0 ? 'overdue' : 'pending';

            return `
                <div class="lending-item">
                    <h3>${lend.personName}</h3>
                    <p>${lend.type === 'borrow' ? 'ยืม' : 'ให้ยืม'}: ฿${lend.amount.toFixed(2)}</p>
                    <p>ชำระแล้ว: ฿${lend.paid.toFixed(2)}</p>
                    <p>ครบกำหนด: ${this.formatDate(lend.dueDate)} (${daysLeft} วัน)</p>
                    <span class="lending-status ${status}">
                        ${status === 'completed' ? 'ชำระครบ' : 
                          status === 'overdue' ? 'เกินกำหนด' : 'รอชำระ'}
                    </span>
                </div>
            `;
        }).join('');
    }

    updateCharts() {
        this.updateExpenseChart();
        this.updateWeeklyChart();
        this.updateMonthlyChart();
    }

    updateExpenseChart() {
        const canvas = document.getElementById('expenseChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const monthlyExpenses = this.data.transactions.filter(t => {
            const tDate = new Date(t.date);
            return t.type === 'expense' &&
                   tDate.getMonth() === currentMonth &&
                   tDate.getFullYear() === currentYear;
        });

        const categoryTotals = {};
        monthlyExpenses.forEach(t => {
            categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
        });

        const categories = Object.keys(categoryTotals);
        const amounts = Object.values(categoryTotals);

        // Set canvas size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = 300;

        if (categories.length === 0) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
            ctx.textAlign = 'center';
            ctx.font = '16px sans-serif';
            ctx.fillText(this.t('no_data'), canvas.width / 2, canvas.height / 2);
            return;
        }

        const maxAmount = Math.max(...amounts);
        const barWidth = canvas.width / categories.length;
        const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        categories.forEach((cat, i) => {
            const height = (amounts[i] / maxAmount) * (canvas.height - 60);
            const x = i * barWidth;
            const y = canvas.height - height - 30;

            ctx.fillStyle = colors[i % colors.length];
            ctx.fillRect(x + 10, y, barWidth - 20, height);

            ctx.fillStyle = 'var(--text-color)';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(cat, x + barWidth / 2, canvas.height - 10);
            ctx.fillText(`฿${amounts[i].toFixed(0)}`, x + barWidth / 2, y - 5);
        });
    }

    updateWeeklyChart() {
        const canvas = document.getElementById('weeklyChart') || document.getElementById('weeklyChartModal');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const now = new Date();
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());

        const weekData = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];

            const dayExpenses = this.data.transactions
                .filter(t => t.type === 'expense' && t.date === dateStr)
                .reduce((sum, t) => sum + t.amount, 0);

            weekData.push(dayExpenses);
        }

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = 300;

        const maxAmount = Math.max(...weekData, 1);
        const dayWidth = canvas.width / 7;
        const days = this.currentLang === 'th' 
            ? ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']
            : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        weekData.forEach((amount, i) => {
            const height = (amount / maxAmount) * (canvas.height - 60);
            const x = i * dayWidth;
            const y = canvas.height - height - 30;

            ctx.fillStyle = 'var(--primary-color)';
            ctx.fillRect(x + 10, y, dayWidth - 20, height);

            ctx.fillStyle = 'var(--text-color)';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(days[i], x + dayWidth / 2, canvas.height - 10);
            if (amount > 0) {
                ctx.fillText(`฿${amount.toFixed(0)}`, x + dayWidth / 2, y - 5);
            }
        });
    }

    updateMonthlyChart() {
        const canvas = document.getElementById('monthlyChart') || document.getElementById('monthlyChartModal');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const now = new Date();
        const months = [];
        const incomeData = [];
        const expenseData = [];

        for (let i = 5; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            months.push(date.toLocaleDateString(this.currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short' }));

            const monthTransactions = this.data.transactions.filter(t => {
                const tDate = new Date(t.date);
                return tDate.getMonth() === date.getMonth() &&
                       tDate.getFullYear() === date.getFullYear();
            });

            incomeData.push(
                monthTransactions
                    .filter(t => t.type === 'income')
                    .reduce((sum, t) => sum + t.amount, 0)
            );

            expenseData.push(
                monthTransactions
                    .filter(t => t.type === 'expense')
                    .reduce((sum, t) => sum + t.amount, 0)
            );
        }

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = 300;

        const maxAmount = Math.max(...incomeData, ...expenseData, 1);
        const monthWidth = canvas.width / 6;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        months.forEach((month, i) => {
            const incomeHeight = (incomeData[i] / maxAmount) * (canvas.height - 60);
            const expenseHeight = (expenseData[i] / maxAmount) * (canvas.height - 60);
            const x = i * monthWidth;

            // Income bar
            ctx.fillStyle = 'var(--success-color)';
            ctx.fillRect(x + 10, canvas.height - incomeHeight - 30, (monthWidth - 30) / 2, incomeHeight);

            // Expense bar
            ctx.fillStyle = 'var(--danger-color)';
            ctx.fillRect(x + 10 + (monthWidth - 30) / 2, canvas.height - expenseHeight - 30, (monthWidth - 30) / 2, expenseHeight);

            ctx.fillStyle = 'var(--text-color)';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(month, x + monthWidth / 2, canvas.height - 10);
        });
    }

    // Modal functions
    showModal(title, content) {
        const modal = document.querySelector('.modal');
        if (modal) {
            modal.classList.remove('large');
        }
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').innerHTML = content;
        document.getElementById('modalOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    showAddTransactionModal() {
        const content = `
            <form id="transactionFormModal">
                <div class="form-group">
                    <label data-i18n="type">ประเภท</label>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="type" value="income" checked>
                            <span data-i18n="income">รายรับ</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="type" value="expense">
                            <span data-i18n="expense">รายจ่าย</span>
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="amountModal" data-i18n="amount">จำนวนเงิน (฿)</label>
                    <input type="number" id="amountModal" step="0.01" min="0" required>
                </div>
                <div class="form-group">
                    <label for="accountModal" data-i18n="accounts">บัญชี</label>
                    <select id="accountModal" required></select>
                </div>
                <div class="form-group">
                    <label for="categoryModal" data-i18n="category">หมวดหมู่</label>
                    <select id="categoryModal" required></select>
                </div>
                <div class="form-group">
                    <label for="dateModal" data-i18n="date">วันที่</label>
                    <input type="date" id="dateModal" required>
                </div>
                <div class="form-group">
                    <label for="noteModal" data-i18n="note">โน้ต</label>
                    <textarea id="noteModal" rows="3"></textarea>
                </div>
                <button type="submit" class="btn-primary" data-i18n="save">บันทึก</button>
            </form>
        `;
        this.showModal(this.t('add_transaction'), content);
        this.updateTranslations();
        
        // Populate selects
        const accountSelect = document.getElementById('accountModal');
        accountSelect.innerHTML = this.data.accounts.map(acc => 
            `<option value="${acc.id}">${acc.name}</option>`
        ).join('');
        
        const type = document.querySelector('input[name="type"]:checked')?.value || 'income';
        const categorySelect = document.getElementById('categoryModal');
        categorySelect.innerHTML = this.data.categories[type].map(cat => 
            `<option value="${cat}">${cat}</option>`
        ).join('');
        
        // Update categories when type changes
        document.querySelectorAll('input[name="type"]').forEach(radio => {
            radio.addEventListener('change', () => {
                const newType = document.querySelector('input[name="type"]:checked').value;
                categorySelect.innerHTML = this.data.categories[newType].map(cat => 
                    `<option value="${cat}">${cat}</option>`
                ).join('');
            });
        });
        
        // Set default date
        document.getElementById('dateModal').value = new Date().toISOString().split('T')[0];
        
        // Handle form submit
        document.getElementById('transactionFormModal').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const transaction = {
                id: Date.now(),
                type: formData.get('type'),
                amount: parseFloat(document.getElementById('amountModal').value),
                accountId: parseInt(document.getElementById('accountModal').value),
                category: document.getElementById('categoryModal').value,
                date: document.getElementById('dateModal').value,
                note: document.getElementById('noteModal').value || '',
                timestamp: new Date().toISOString()
            };

            const account = this.data.accounts.find(a => a.id === transaction.accountId);
            if (account) {
                if (transaction.type === 'income') {
                    account.balance += transaction.amount;
                } else {
                    account.balance -= transaction.amount;
                }
            }

            this.data.transactions.push(transaction);
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('บันทึกรายการสำเร็จ!');
        });
    }

    showAccountsModal() {
        let accountsHtml = this.data.accounts.map(acc => `
            <div class="account-card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3>${acc.name}</h3>
                        <p class="balance-amount" style="font-size: 1.5rem;">
                            ฿${this.data.settings.hideBalance ? '••••' : acc.balance.toFixed(2)}
                        </p>
                    </div>
                    <div style="width: 50px; height: 50px; border-radius: 50%; background: ${acc.color};"></div>
                </div>
            </div>
        `).join('');
        
        const content = `
            <div>
                <div style="margin-bottom: 1rem;">
                    <button class="btn-secondary" onclick="app.showAddAccountModal()" style="width: 100%; margin-bottom: 1rem;">
                        + เพิ่มบัญชี
                    </button>
                </div>
                <div id="accountsListModal">${accountsHtml}</div>
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                    <h3>โอนเงินระหว่างบัญชี</h3>
                    <form id="transferFormModal">
                        <div class="form-group">
                            <label for="fromAccountModal">จากบัญชี</label>
                            <select id="fromAccountModal" required></select>
                        </div>
                        <div class="form-group">
                            <label for="toAccountModal">ไปยังบัญชี</label>
                            <select id="toAccountModal" required></select>
                        </div>
                        <div class="form-group">
                            <label for="transferAmountModal">จำนวนเงิน (฿)</label>
                            <input type="number" id="transferAmountModal" step="0.01" min="0" required>
                        </div>
                        <button type="submit" class="btn-primary">โอนเงิน</button>
                    </form>
                </div>
            </div>
        `;
        this.showModal(this.t('accounts'), content);
        this.updateTranslations();
        
        // Populate transfer selects
        const fromSelect = document.getElementById('fromAccountModal');
        const toSelect = document.getElementById('toAccountModal');
        fromSelect.innerHTML = this.data.accounts.map(acc => 
            `<option value="${acc.id}">${acc.name}</option>`
        ).join('');
        toSelect.innerHTML = this.data.accounts.map(acc => 
            `<option value="${acc.id}">${acc.name}</option>`
        ).join('');
        
        document.getElementById('transferFormModal').addEventListener('submit', (e) => {
            e.preventDefault();
            this.transferMoneyFromModal();
        });
    }

    transferMoneyFromModal() {
        const fromId = parseInt(document.getElementById('fromAccountModal').value);
        const toId = parseInt(document.getElementById('toAccountModal').value);
        const amount = parseFloat(document.getElementById('transferAmountModal').value);

        if (fromId === toId) {
            this.showNotification('ไม่สามารถโอนไปยังบัญชีเดียวกันได้', 'error');
            return;
        }

        const fromAccount = this.data.accounts.find(a => a.id === fromId);
        const toAccount = this.data.accounts.find(a => a.id === toId);

        if (!fromAccount || !toAccount) return;
        if (fromAccount.balance < amount) {
            this.showNotification('ยอดเงินไม่พอ', 'error');
            return;
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        const now = new Date().toISOString();
        this.data.transactions.push({
            id: Date.now(),
            type: 'expense',
            amount: amount,
            accountId: fromId,
            category: 'โอนเงิน',
            date: new Date().toISOString().split('T')[0],
            note: `โอนไปยัง ${toAccount.name}`,
            timestamp: now
        });

        this.data.transactions.push({
            id: Date.now() + 1,
            type: 'income',
            amount: amount,
            accountId: toId,
            category: 'โอนเงิน',
            date: new Date().toISOString().split('T')[0],
            note: `รับจาก ${fromAccount.name}`,
            timestamp: now
        });

        this.saveData();
        this.updateUI();
        this.closeModal();
        this.showNotification('โอนเงินสำเร็จ!');
    }

    showStatisticsModal() {
        const content = `
            <div>
                <div class="stats-tabs">
                    <button class="tab-btn active" data-tab="weekly" data-i18n="weekly">รายสัปดาห์</button>
                    <button class="tab-btn" data-tab="monthly" data-i18n="monthly">รายเดือน</button>
                </div>
                <div class="tab-content active" id="weeklyTabModal">
                    <canvas id="weeklyChartModal"></canvas>
                </div>
                <div class="tab-content" id="monthlyTabModal">
                    <canvas id="monthlyChartModal"></canvas>
                </div>
            </div>
        `;
        this.showModal(this.t('statistics'), content);
        setTimeout(() => {
            document.querySelector('.modal')?.classList.add('large');
        }, 0);
        this.updateTranslations();
        
        // Setup tabs
        document.querySelectorAll('#modalBody .tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                document.querySelectorAll('#modalBody .tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('#modalBody .tab-content').forEach(c => c.classList.remove('active'));
                e.currentTarget.classList.add('active');
                document.getElementById(`${tab}TabModal`).classList.add('active');
                setTimeout(() => this.updateCharts(), 100);
            });
        });
        
        setTimeout(() => this.updateCharts(), 100);
    }

    showBudgetModal() {
        let budgetsHtml = '';
        if (this.data.budgets.length === 0) {
            budgetsHtml = '<div class="empty-state"><p>ยังไม่มีงบประมาณ</p></div>';
        } else {
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            
            budgetsHtml = this.data.budgets.map(budget => {
                const monthlyTransactions = this.data.transactions.filter(t => {
                    const tDate = new Date(t.date);
                    return t.type === 'expense' &&
                           t.category === budget.category &&
                           tDate.getMonth() === currentMonth &&
                           tDate.getFullYear() === currentYear;
                });
                const used = monthlyTransactions.reduce((sum, t) => sum + t.amount, 0);
                const percentage = (used / budget.amount) * 100;
                const status = percentage >= 100 ? 'exceeded' : percentage >= 80 ? 'warning' : '';
                
                return `
                    <div class="budget-card">
                        <h3>${budget.category}</h3>
                        <div class="budget-usage">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span>${this.t('used')}: ฿${used.toFixed(2)}</span>
                                <span class="${status}">${this.t('from')} ฿${budget.amount.toFixed(2)}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${Math.min(percentage, 100)}%">
                                    ${percentage.toFixed(0)}%
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        const content = `
            <div>
                <button class="btn-secondary" onclick="app.showAddBudgetModal()" style="width: 100%; margin-bottom: 1rem;" data-i18n="add_budget">
                    + เพิ่มงบประมาณ
                </button>
                <div>${budgetsHtml}</div>
            </div>
        `;
        this.showModal(this.t('budget'), content);
        this.updateTranslations();
    }

    showGoalsModal() {
        let goalsHtml = '';
        if (this.data.goals.length === 0) {
            goalsHtml = '<div class="empty-state"><p>ยังไม่มีเป้าหมาย</p></div>';
        } else {
            goalsHtml = this.data.goals.map(goal => {
                const account = this.data.accounts.find(a => a.id === goal.accountId);
                const progress = account ? (account.balance / goal.target) * 100 : 0;
                const daysLeft = Math.ceil((new Date(goal.endDate) - new Date()) / (1000 * 60 * 60 * 24));
                
                return `
                    <div class="goal-card">
                        <h3>${goal.name}</h3>
                        <p>${this.t('target')}: ฿${goal.target.toFixed(2)}</p>
                        <p>${this.t('end_date')}: ${this.formatDate(goal.endDate)} (${daysLeft} ${this.t('days_left')})</p>
                        <div class="goal-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${Math.min(progress, 100)}%">
                                    ${progress.toFixed(0)}%
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        const content = `
            <div>
                <button class="btn-secondary" onclick="app.showAddGoalModal()" style="width: 100%; margin-bottom: 1rem;" data-i18n="add_goal">
                    + เพิ่มเป้าหมาย
                </button>
                <div>${goalsHtml}</div>
            </div>
        `;
        this.showModal(this.t('savings_goals'), content);
        this.updateTranslations();
    }

    showChallengesModal() {
        let challengesHtml = '';
        if (this.data.challenges.length === 0) {
            this.data.challenges = [
                {
                    id: 1,
                    name: 'ไม่ซื้อกาแฟ 5 วัน',
                    type: 'no_spend',
                    target: 5,
                    current: 0,
                    reward: 100
                },
                {
                    id: 2,
                    name: 'ออมวันละ 20 บาท',
                    type: 'daily_save',
                    target: 7,
                    current: 0,
                    amount: 20,
                    reward: 150
                }
            ];
            this.saveData();
        }
        
        challengesHtml = this.data.challenges.map(challenge => {
            const progress = (challenge.current / challenge.target) * 100;
            return `
                <div class="goal-card">
                    <h3>${challenge.name}</h3>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%">
                            ${challenge.current}/${challenge.target}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        const activeGoal = this.data.goals.find(g => {
            const endDate = new Date(g.endDate);
            return endDate > new Date();
        });
        
        let gameHtml = `<p data-i18n="no_active_goal">ไม่มีเป้าหมายที่ใช้งานอยู่</p>`;
        if (activeGoal) {
            const account = this.data.accounts.find(a => a.id === activeGoal.accountId);
            const dailyTarget = activeGoal.target / 30;
            const transactions = this.data.transactions
                .filter(t => t.accountId === activeGoal.accountId && t.type === 'income')
                .sort((a, b) => new Date(b.date) - new Date(a.date));
            const daysWithSavings = new Set();
            transactions.forEach(t => {
                if (t.amount >= dailyTarget) {
                    daysWithSavings.add(t.date);
                }
            });
            const consecutiveDays = daysWithSavings.size;
            const bulbs = Math.min(consecutiveDays, 30);
            
            gameHtml = `
                <div id="lightBulbsModal" style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin: 2rem 0;"></div>
                <p>${this.t('consecutive_days')} ${consecutiveDays} ${this.t('days_left')} (${this.t('target')}: ${dailyTarget.toFixed(2)} ${this.t('daily_target')})</p>
            `;
        }
        
        const content = `
            <div>
                <h3>ชาเลนจ์</h3>
                <div>${challengesHtml}</div>
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                    <h3>มินิเกม: ดวงไฟการออม</h3>
                    <div class="game-container">
                        ${gameHtml}
                    </div>
                </div>
            </div>
        `;
        this.showModal(this.t('challenge_game'), content);
        this.updateTranslations();
        
        if (activeGoal) {
            const lightBulbs = document.getElementById('lightBulbsModal');
            for (let i = 0; i < 30; i++) {
                const bulb = document.createElement('div');
                bulb.className = `light-bulb ${i < bulbs ? 'on' : ''}`;
                bulb.textContent = i < bulbs ? '💡' : '⚫';
                lightBulbs.appendChild(bulb);
            }
        }
    }

    showLendingModal() {
        let lendingHtml = '';
        if (this.data.lending.length === 0) {
            lendingHtml = '<div class="empty-state"><p>ยังไม่มีรายการยืม/ให้ยืม</p></div>';
        } else {
            lendingHtml = this.data.lending.map(lend => {
                const dueDate = new Date(lend.dueDate);
                const now = new Date();
                const daysLeft = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24));
                const status = lend.paid >= lend.amount ? 'completed' : 
                              daysLeft < 0 ? 'overdue' : 'pending';
                
                return `
                    <div class="lending-item">
                        <h3>${lend.personName}</h3>
                        <p>${lend.type === 'borrow' ? 'ยืม' : 'ให้ยืม'}: ฿${lend.amount.toFixed(2)}</p>
                        <p>ชำระแล้ว: ฿${lend.paid.toFixed(2)}</p>
                        <p>ครบกำหนด: ${this.formatDate(lend.dueDate)} (${daysLeft} วัน)</p>
                        <span class="lending-status ${status}">
                            ${status === 'completed' ? 'ชำระครบ' : 
                              status === 'overdue' ? 'เกินกำหนด' : 'รอชำระ'}
                        </span>
                    </div>
                `;
            }).join('');
        }
        
        const content = `
            <div>
                <button class="btn-secondary" onclick="app.showAddLendingModal()" style="width: 100%; margin-bottom: 1rem;" data-i18n="add_lending">
                    + เพิ่มรายการ
                </button>
                <div>${lendingHtml}</div>
            </div>
        `;
        this.showModal(this.t('lending'), content);
        this.updateTranslations();
    }

    showSettingsModal() {
        const content = `
            <div>
                <div class="settings-section">
                    <h3>การแจ้งเตือน</h3>
                    <label class="switch-label">
                        <input type="checkbox" id="budgetAlertModal" ${this.data.settings.budgetAlert ? 'checked' : ''}>
                        <span>แจ้งเตือนเมื่อใช้งบเกิน</span>
                    </label>
                    <label class="switch-label">
                        <input type="checkbox" id="goalAlertModal" ${this.data.settings.goalAlert ? 'checked' : ''}>
                        <span>แจ้งเตือนเมื่อใกล้เป้าหมาย</span>
                    </label>
                </div>
                <div class="settings-section">
                    <h3>ข้อมูล</h3>
                    <button class="btn-secondary" onclick="app.exportCSV(); app.closeModal();" style="width: 100%; margin-bottom: 0.5rem;">
                        ส่งออก CSV
                    </button>
                    <button class="btn-secondary" onclick="document.getElementById('importFileModal').click();" style="width: 100%;">
                        นำเข้า CSV
                    </button>
                    <input type="file" id="importFileModal" accept=".csv" style="display: none;">
                </div>
            </div>
        `;
        this.showModal(this.t('settings'), content);
        this.updateTranslations();
        
        document.getElementById('budgetAlertModal').addEventListener('change', (e) => {
            this.data.settings.budgetAlert = e.target.checked;
            this.saveData();
        });
        
        document.getElementById('goalAlertModal').addEventListener('change', (e) => {
            this.data.settings.goalAlert = e.target.checked;
            this.saveData();
        });
        
        document.getElementById('importFileModal').addEventListener('change', (e) => {
            this.importCSV(e.target.files[0]);
            this.closeModal();
        });
    }

    showAddAccountModal() {
        const content = `
            <form id="addAccountForm">
                <div class="form-group">
                    <label data-i18n="add_account">ชื่อบัญชี</label>
                    <input type="text" id="accountName" required>
                </div>
                <div class="form-group">
                    <label>สี</label>
                    <input type="color" id="accountColor" value="#4a90e2">
                </div>
                <button type="submit" class="btn-primary" data-i18n="add_account">เพิ่มบัญชี</button>
            </form>
        `;
        this.showModal(this.t('add_account'), content);
        this.updateTranslations();
        
        document.getElementById('addAccountForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('accountName').value;
            const color = document.getElementById('accountColor').value;
            
            this.data.accounts.push({
                id: Date.now(),
                name: name,
                balance: 0,
                color: color
            });
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('เพิ่มบัญชีสำเร็จ!');
        });
    }

    showAddBudgetModal() {
        const content = `
            <form id="addBudgetForm">
                <div class="form-group">
                    <label>หมวดหมู่</label>
                    <select id="budgetCategory" required>
                        ${this.data.categories.expense.map(cat => 
                            `<option value="${cat}">${cat}</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>งบประมาณ (฿)</label>
                    <input type="number" id="budgetAmount" step="0.01" min="0" required>
                </div>
                <button type="submit" class="btn-primary">เพิ่มงบประมาณ</button>
            </form>
        `;
        this.showModal(this.t('add_budget'), content);
        this.updateTranslations();
        
        document.getElementById('addBudgetForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const category = document.getElementById('budgetCategory').value;
            const amount = parseFloat(document.getElementById('budgetAmount').value);
            
            this.data.budgets.push({
                id: Date.now(),
                category: category,
                amount: amount
            });
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('เพิ่มงบประมาณสำเร็จ!');
        });
    }

    showAddGoalModal() {
        const content = `
            <form id="addGoalForm">
                <div class="form-group">
                    <label data-i18n="add_goal">ชื่อเป้าหมาย</label>
                    <input type="text" id="goalName" required>
                </div>
                <div class="form-group">
                    <label data-i18n="target">จำนวนเป้าหมาย (฿)</label>
                    <input type="number" id="goalTarget" step="0.01" min="0" required>
                </div>
                <div class="form-group">
                    <label data-i18n="end_date">วันสิ้นสุด</label>
                    <input type="date" id="goalEndDate" required>
                </div>
                <div class="form-group">
                    <label data-i18n="accounts">บัญชี</label>
                    <select id="goalAccount" required>
                        ${this.data.accounts.map(acc => 
                            `<option value="${acc.id}">${acc.name}</option>`
                        ).join('')}
                    </select>
                </div>
                <button type="submit" class="btn-primary" data-i18n="add_goal">เพิ่มเป้าหมาย</button>
            </form>
        `;
        this.showModal(this.t('add_goal'), content);
        this.updateTranslations();
        
        const endDateInput = document.getElementById('goalEndDate');
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        endDateInput.value = nextMonth.toISOString().split('T')[0];
        
        document.getElementById('addGoalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('goalName').value;
            const target = parseFloat(document.getElementById('goalTarget').value);
            const endDate = document.getElementById('goalEndDate').value;
            const accountId = parseInt(document.getElementById('goalAccount').value);
            
            this.data.goals.push({
                id: Date.now(),
                name: name,
                target: target,
                endDate: endDate,
                accountId: accountId
            });
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('เพิ่มเป้าหมายสำเร็จ!');
        });
    }

    showAddLendingModal() {
        const content = `
            <form id="addLendingForm">
                <div class="form-group">
                    <label data-i18n="type">ประเภท</label>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="lendType" value="borrow" checked>
                            <span data-i18n="borrow">ยืม</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="lendType" value="lend">
                            <span data-i18n="lend">ให้ยืม</span>
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label data-i18n="person_name">ชื่อคน</label>
                    <input type="text" id="lendPerson" required>
                </div>
                <div class="form-group">
                    <label data-i18n="amount">จำนวนเงิน (฿)</label>
                    <input type="number" id="lendAmount" step="0.01" min="0" required>
                </div>
                <div class="form-group">
                    <label data-i18n="due_date">วันที่ครบกำหนด</label>
                    <input type="date" id="lendDueDate" required>
                </div>
                <button type="submit" class="btn-primary" data-i18n="save">บันทึก</button>
            </form>
        `;
        this.showModal(this.t('add_lending'), content);
        this.updateTranslations();
        
        const dueDateInput = document.getElementById('lendDueDate');
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        dueDateInput.value = nextWeek.toISOString().split('T')[0];
        
        document.getElementById('addLendingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const type = document.querySelector('input[name="lendType"]:checked').value;
            const person = document.getElementById('lendPerson').value;
            const amount = parseFloat(document.getElementById('lendAmount').value);
            const dueDate = document.getElementById('lendDueDate').value;
            
            this.data.lending.push({
                id: Date.now(),
                type: type,
                personName: person,
                amount: amount,
                paid: 0,
                dueDate: dueDate
            });
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('บันทึกรายการสำเร็จ!');
        });
    }

    switchTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
        document.getElementById(`${tabName}Tab`)?.classList.add('active');
        
        this.updateCharts();
    }

    exportCSV() {
        const headers = ['วันที่', 'ประเภท', 'จำนวนเงิน', 'บัญชี', 'หมวดหมู่', 'โน้ต'];
        const rows = this.data.transactions.map(t => {
            const account = this.data.accounts.find(a => a.id === t.accountId);
            return [
                t.date,
                t.type === 'income' ? 'รายรับ' : 'รายจ่าย',
                t.amount,
                account?.name || '',
                t.category,
                t.note
            ];
        });

        const csv = [headers, ...rows].map(row => 
            row.map(cell => `"${cell}"`).join(',')
        ).join('\n');

        const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `รายการเงิน_${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        this.showNotification('ส่งออก CSV สำเร็จ!');
    }

    importCSV(file) {
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            const lines = text.split('\n').slice(1); // Skip header
            
            lines.forEach(line => {
                if (!line.trim()) return;
                const cells = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g).map(c => c.replace(/^"|"$/g, ''));
                if (cells.length < 3) return;
                
                // Simple import - you might want to enhance this
                const account = this.data.accounts.find(a => a.name === cells[3]) || this.data.accounts[0];
                const type = cells[1] === 'รายรับ' ? 'income' : 'expense';
                
                this.data.transactions.push({
                    id: Date.now() + Math.random(),
                    type: type,
                    amount: parseFloat(cells[2]) || 0,
                    accountId: account.id,
                    category: cells[4] || 'อื่นๆ',
                    date: cells[0] || new Date().toISOString().split('T')[0],
                    note: cells[5] || '',
                    timestamp: new Date().toISOString()
                });
            });
            
            this.saveData();
            this.updateUI();
            this.showNotification('นำเข้า CSV สำเร็จ!');
        };
        reader.readAsText(file);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('th-TH', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    showNotification(message, type = 'success') {
        // Simple notification - you can enhance this
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'error' ? 'var(--danger-color)' : 'var(--success-color)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideIn 0.3s;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize app
const app = new MoneyTracker();

// Make app globally accessible for onclick handlers
window.app = app;

// Handle window resize for charts
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        app.updateCharts();
    }, 250);
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

