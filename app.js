// i18n Translations
const translations = {
    th: {
        app_title: 'บันทึกรายรับรายจ่าย',
        nav_add: 'เพิ่ม',
        nav_accounts: 'บัญชี',
        nav_statistics: 'สถิติ',
        nav_settings: 'ตั้งค่า',
        nav_dashboard: 'หน้าหลัก',
        nav_transactions: 'รายการ',
        nav_budget: 'งบประมาณ',
        nav_goals: 'เป้าหมาย',
        total_balance: 'ยอดรวมทั้งหมด',
        monthly_income: 'รายรับเดือนนี้',
        monthly_expense: 'รายจ่ายเดือนนี้',
        savings_goals: 'เป้าหมายการออม',
        view_all: 'ดูทั้งหมด',
        recent_transactions: 'รายการล่าสุด',
        expense_by_category: 'กราฟรายจ่ายตามหมวด',
        quick_menu: 'เมนูหลัก',
        add_transaction: 'เพิ่มรายการ',
        add_income: 'เพิ่มรายรับ',
        add_expense: 'เพิ่มรายจ่าย',
        accounts: 'บัญชี',
        statistics: 'สถิติ',
        budget: 'งบประมาณ',
        daily_expense: 'ค่าใช้จ่ายรายวัน',
        daily_expense_limit: 'งบค่าใช้จ่ายรายวัน',
        today_expense: 'ค่าใช้จ่ายวันนี้',
        set_daily_limit: 'ตั้งงบค่าใช้จ่ายรายวัน',
        set_goal: 'ตั้งเป้าหมาย',
        goals: 'เป้าหมาย',
        challenges: 'ชาเลนจ์',
        lending: 'ยืม/ให้ยืม',
        settings: 'ตั้งค่า',
        add_account: 'เพิ่มบัญชี',
        account_name: 'ชื่อบัญชี',
        edit_account: 'แก้ไขบัญชี',
        edit: 'แก้ไข',
        add_category: 'เพิ่มหมวดหมู่',
        category_name: 'ชื่อหมวดหมู่',
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
        time: 'เวลา',
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
        create_goal: 'สร้างเป้าหมายเพื่อเริ่มเกม',
        delete: 'ลบ',
        delete_transaction: 'ลบรายการ',
        confirm_delete: 'คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?',
        delete_account: 'ลบบัญชี',
        confirm_delete_account: 'คุณแน่ใจหรือไม่ว่าต้องการลบบัญชีนี้?',
        cannot_delete_account: 'ไม่สามารถลบบัญชีนี้ได้ เนื่องจากมีรายการที่ใช้บัญชีนี้อยู่',
        account_deleted: 'ลบบัญชีสำเร็จ!',
        no_accounts: 'ยังไม่มีบัญชี กรุณาเพิ่มบัญชีก่อน',
        please_add_account: 'กรุณาเพิ่มบัญชีก่อนเพิ่มรายการ',
        previous: 'ก่อนหน้า',
        next: 'ถัดไป',
        this_week: 'สัปดาห์นี้',
        recent_months: '6 เดือนล่าสุด'
    },
    en: {
        app_title: 'Money Tracker',
        nav_add: 'Add',
        nav_accounts: 'Accounts',
        nav_statistics: 'Statistics',
        nav_settings: 'Settings',
        nav_dashboard: 'Dashboard',
        nav_transactions: 'Transactions',
        nav_budget: 'Budget',
        nav_goals: 'Goals',
        total_balance: 'Total Balance',
        monthly_income: 'Monthly Income',
        monthly_expense: 'Monthly Expense',
        savings_goals: 'Savings Goals',
        view_all: 'View All',
        recent_transactions: 'Recent Transactions',
        expense_by_category: 'Expense by Category',
        quick_menu: 'Quick Menu',
        add_transaction: 'Add Transaction',
        add_income: 'Add Income',
        add_expense: 'Add Expense',
        accounts: 'Accounts',
        statistics: 'Statistics',
        budget: 'Budget',
        daily_expense: 'Daily Expense',
        daily_expense_limit: 'Daily Expense Limit',
        today_expense: 'Today\'s Expense',
        set_daily_limit: 'Set Daily Expense Limit',
        set_goal: 'Set Goal',
        goals: 'Goals',
        challenges: 'Challenges',
        lending: 'Lending',
        settings: 'Settings',
        add_account: 'Add Account',
        account_name: 'Account Name',
        edit_account: 'Edit Account',
        edit: 'Edit',
        add_category: 'Add Category',
        category_name: 'Category Name',
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
        time: 'Time',
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
        create_goal: 'Create a goal to start the game',
        delete: 'Delete',
        delete_transaction: 'Delete Transaction',
        confirm_delete: 'Are you sure you want to delete this transaction?',
        delete_account: 'Delete Account',
        confirm_delete_account: 'Are you sure you want to delete this account?',
        cannot_delete_account: 'Cannot delete this account because there are transactions using it',
        account_deleted: 'Account deleted successfully!',
        no_accounts: 'No accounts yet. Please add an account first',
        please_add_account: 'Please add an account before adding a transaction',
        previous: 'Previous',
        next: 'Next',
        this_week: 'This Week',
        recent_months: 'Recent 6 Months'
    }
};

// Data Management
class MoneyTracker {
    constructor() {
        this.data = this.loadData();
        this.currentLang = this.data.settings.language || 'th';
        this.defaultColors = [
            '#4a90e2', // Blue
            '#50c878', // Green
            '#7b68ee', // Purple
            '#e74c3c', // Red
            '#f39c12', // Orange
            '#1abc9c', // Turquoise
            '#e67e22', // Dark Orange
            '#9b59b6', // Dark Purple
            '#3498db', // Light Blue
            '#2ecc71'  // Light Green
        ];
        this.chartBarData = {}; // Store chart bar positions for click detection
        this.hoveredBar = null; // Store currently hovered bar
        this.chartTooltip = null; // Tooltip element
        this.weekOffset = 0; // Week offset for navigation (0 = current week)
        this.monthOffset = 0; // Month offset for navigation (0 = current month)
        this.init();
    }

    loadData() {
        const saved = localStorage.getItem('moneyTrackerData');
        if (saved) {
            const data = JSON.parse(saved);
            // Migrate old lending records to include isReturned field
            if (data.lending && Array.isArray(data.lending)) {
                data.lending.forEach(lend => {
                    if (lend.isReturned === undefined) {
                        lend.isReturned = false;
                    }
                });
            }
            return data;
        }
        return {
            accounts: [],
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
                language: 'th',
                dailyExpenseLimit: null
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
        // Update chart labels
        this.updateWeeklyChart();
        this.updateMonthlyChart();
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
        // Settings toggle
        document.getElementById('settingsToggle')?.addEventListener('click', () => {
            this.showSettingsModal();
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
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

        // Account filter for charts
        const accountFilter = document.getElementById('accountFilter');
        if (accountFilter) {
            accountFilter.addEventListener('change', () => {
                this.updateCharts();
            });
        }

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
        
        // Setup tabs for statistics view
        if (viewName === 'statistics') {
            document.querySelectorAll('#statistics .tab-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const tab = e.currentTarget.dataset.tab;
                    document.querySelectorAll('#statistics .tab-btn').forEach(b => b.classList.remove('active'));
                    document.querySelectorAll('#statistics .tab-content').forEach(c => c.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                    document.getElementById(`${tab}Tab`).classList.add('active');
                    setTimeout(() => this.updateCharts(), 100);
                });
            });
        }
        
        // Setup transfer form for accounts view
        if (viewName === 'accounts') {
            const transferForm = document.getElementById('transferForm');
            if (transferForm) {
                // Remove existing listeners by cloning the form
                const newForm = transferForm.cloneNode(true);
                transferForm.parentNode.replaceChild(newForm, transferForm);
                
                document.getElementById('transferForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.transferMoney();
                });
            }
        }
        
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
        // Update charts when theme changes
        setTimeout(() => this.updateCharts(), 100);
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

        // Update monthly income and expense
        const incomeEl = document.getElementById('monthlyIncome');
        const expenseEl = document.getElementById('monthlyExpense');
        if (incomeEl || expenseEl) {
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

            if (incomeEl) {
                if (this.data.settings.hideBalance) {
                    incomeEl.textContent = '฿••••';
                } else {
                    incomeEl.textContent = `฿${monthlyIncome.toFixed(2)}`;
                }
            }
            if (expenseEl) {
                if (this.data.settings.hideBalance) {
                    expenseEl.textContent = '฿••••';
                } else {
                    expenseEl.textContent = `฿${monthlyExpense.toFixed(2)}`;
                }
            }
        }

        // Update accounts summary amounts
        const accountsSummary = document.getElementById('accountsSummary');
        if (accountsSummary) {
            const amountElements = accountsSummary.querySelectorAll('.amount');
            amountElements.forEach((el, index) => {
                const account = this.data.accounts[index];
                if (account) {
                    if (this.data.settings.hideBalance) {
                        el.classList.add('hidden');
                        el.textContent = '฿••••';
                    } else {
                        el.classList.remove('hidden');
                        el.textContent = `฿${account.balance.toFixed(2)}`;
                    }
                }
            });
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

    deleteTransaction(transactionId) {
        if (!confirm(this.t('confirm_delete'))) {
            return;
        }

        const transaction = this.data.transactions.find(t => t.id === transactionId);
        if (!transaction) return;

        // Reverse the account balance change
        const account = this.data.accounts.find(a => a.id === transaction.accountId);
        if (account) {
            if (transaction.type === 'income') {
                account.balance -= transaction.amount;
            } else {
                account.balance += transaction.amount;
            }
        }

        // Remove transaction from array
        this.data.transactions = this.data.transactions.filter(t => t.id !== transactionId);
        this.saveData();
        this.updateUI();
        this.showNotification('ลบรายการสำเร็จ!');
    }

    deleteAccount(accountId) {
        if (!confirm(this.t('confirm_delete_account'))) {
            return;
        }

        // Check if account has transactions
        const hasTransactions = this.data.transactions.some(t => t.accountId === accountId);
        if (hasTransactions) {
            this.showNotification(this.t('cannot_delete_account'), 'error');
            return;
        }

        // Check if account is used in goals
        const hasGoals = this.data.goals.some(g => g.accountId === accountId);
        if (hasGoals) {
            this.showNotification('ไม่สามารถลบบัญชีนี้ได้ เนื่องจากมีเป้าหมายที่ใช้บัญชีนี้อยู่', 'error');
            return;
        }

        // Remove account
        this.data.accounts = this.data.accounts.filter(a => a.id !== accountId);
        this.saveData();
        this.updateUI();
        this.closeModal();
        this.showNotification(this.t('account_deleted'));
        
        // Reopen accounts modal to show updated list
        setTimeout(() => {
            this.showAccountsModal();
        }, 100);
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

        const incomeTransaction = {
            id: Date.now() + 1,
            type: 'income',
            amount: amount,
            accountId: toId,
            category: 'โอนเงิน',
            date: new Date().toISOString().split('T')[0],
            note: `รับจาก ${fromAccount.name}`,
            timestamp: now
        };
        this.data.transactions.push(incomeTransaction);

        // Update streak if transferring to a goal account
        const today = new Date().toISOString().split('T')[0];
        const activeGoal = this.data.goals.find(g => {
            const endDate = new Date(g.endDate);
            return endDate > new Date() && g.accountId === toId;
        });
        
        if (activeGoal && amount >= 1) {
            activeGoal.lastTransferDate = today;
            this.saveData();
        }

        this.saveData();
        document.getElementById('transferForm').reset();
        this.updateUI();
        // Force update savings goal section to reflect transfer immediately
        setTimeout(() => {
            this.updateSavingsGoalSection();
        }, 100);
        this.showNotification('โอนเงินสำเร็จ!');
    }

    updateUI() {
        this.updateDashboard();
        this.updateAccounts();
        this.updateTransactions();
        this.updateCategories();
        this.updateBudgets();
        this.updateSavingsGoalSection();
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
            accountsSummary.innerHTML = this.data.accounts.map(acc => {
                const amountElement = this.data.settings.hideBalance 
                    ? `<p class="amount hidden">฿••••</p>`
                    : `<p class="amount">฿${acc.balance.toFixed(2)}</p>`;
                return `
                <div class="account-summary-item">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div class="account-color-bar" style="background-color: ${acc.color}; width: 4px; height: 100%; border-radius: 2px; min-height: 40px;"></div>
                        <div style="flex: 1;">
                            <h4>${acc.name}</h4>
                            ${amountElement}
                        </div>
                    </div>
                </div>
            `;
            }).join('');
        }

        // Monthly stats
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const monthlyTransactions = this.data.transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
        });

        // Monthly income and expense are now updated by updateBalanceDisplay()

        // Daily expense
        this.updateDailyExpense();

        // Recent transactions
        this.updateRecentTransactions();

        // Goals
        this.updateGoalsList();
    }

    updateDailyExpense() {
        const dailyExpenseDisplay = document.getElementById('dailyExpenseDisplay');
        if (!dailyExpenseDisplay) return;

        const today = new Date().toISOString().split('T')[0];
        const todayTransactions = this.data.transactions.filter(t => 
            t.type === 'expense' && t.date === today
        );
        const todayExpense = todayTransactions.reduce((sum, t) => sum + t.amount, 0);
        const dailyLimit = this.data.settings.dailyExpenseLimit || null;

        if (dailyLimit === null || dailyLimit === 0) {
            // Hide persistent notification if no limit is set
            this.hidePersistentNotification();
            
            dailyExpenseDisplay.innerHTML = `
                <div class="budget-card">
                    <div style="text-align: center; padding: 2rem;">
                        <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">
                            ${this.t('today_expense')}: ฿${todayExpense.toFixed(2)}
                        </p>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                            ${this.t('set_daily_limit')}
                        </p>
                        <button class="btn-primary" onclick="app.showDailyExpenseModal()" style="width: auto; padding: 0.5rem 1.5rem;">
                            ${this.t('set_daily_limit')}
                        </button>
                    </div>
                </div>
            `;
        } else {
            const percentage = (todayExpense / dailyLimit) * 100;
            const status = percentage >= 100 ? 'exceeded' : percentage >= 80 ? 'warning' : '';
            const progressColor = percentage >= 100 ? 'var(--danger-color)' : percentage >= 80 ? 'var(--warning-color)' : 'var(--primary-color)';
            
            // Show persistent notification if percentage >= 80%
            if (percentage >= 80) {
                const message = percentage >= 100 
                    ? `ค่าใช้จ่ายวันนี้เกินงบที่ตั้งไว้แล้ว! (${percentage.toFixed(0)}%)`
                    : `ค่าใช้จ่ายวันนี้ใกล้จะเกินงบแล้ว! (${percentage.toFixed(0)}%)`;
                this.showPersistentNotification(message, percentage >= 100 ? 'error' : 'warning');
            } else {
                this.hidePersistentNotification();
            }
            
            dailyExpenseDisplay.innerHTML = `
                <div class="budget-card">
                    <div class="budget-usage">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; align-items: center;">
                            <div>
                                <h3 style="margin-bottom: 0.25rem;">${this.t('today_expense')}</h3>
                                <p style="font-size: 1.5rem; font-weight: bold; color: var(--danger-color); margin: 0;">
                                    ฿${todayExpense.toFixed(2)}
                                </p>
                            </div>
                            <div style="text-align: right;">
                                <p style="color: var(--text-secondary); margin-bottom: 0.25rem;">${this.t('daily_expense_limit')}</p>
                                <p style="font-size: 1.2rem; font-weight: bold; color: ${progressColor}; margin: 0;">
                                    ฿${dailyLimit.toFixed(2)}
                                </p>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${Math.min(percentage, 100)}%; background: ${progressColor};">
                                ${percentage.toFixed(0)}%
                            </div>
                        </div>
                        ${percentage >= 100 ? `
                            <p style="color: var(--danger-color); font-weight: bold; margin-top: 0.5rem; text-align: center;">
                                ⚠️ เกินงบที่ตั้งไว้แล้ว!
                            </p>
                        ` : percentage >= 80 ? `
                            <p style="color: var(--warning-color); font-weight: bold; margin-top: 0.5rem; text-align: center;">
                                ⚠️ ใกล้จะเกินงบแล้ว
                            </p>
                        ` : ''}
                    </div>
                </div>
            `;
        }
    }

    updateSavingsGoalSection() {
        const savingsGoalDisplay = document.getElementById('savingsGoalDisplay');
        if (!savingsGoalDisplay) return;

        // Find active goal (only one goal is allowed)
        const activeGoal = this.data.goals.find(g => {
            const endDate = new Date(g.endDate);
            return endDate > new Date();
        });

        if (!activeGoal) {
            savingsGoalDisplay.innerHTML = `
                <div class="budget-card">
                    <div style="text-align: center; padding: 2rem;">
                        <p style="font-size: 1.5rem; font-weight: bold; margin-bottom: 0.5rem;">
                            ยังไม่มีเป้าหมายการออม
                        </p>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">
                            เลือกบัญชีและตั้งเป้าหมายเพื่อเริ่มการออม
                        </p>
                        <button class="btn-primary" onclick="app.showSavingsGoalModal()" style="width: auto; padding: 0.5rem 1.5rem;">
                            ตั้งเป้าหมาย
                        </button>
                    </div>
                </div>
            `;
            return;
        }

        const account = this.data.accounts.find(a => a.id === activeGoal.accountId);
        if (!account) {
            savingsGoalDisplay.innerHTML = `
                <div class="budget-card">
                    <div style="text-align: center; padding: 2rem;">
                        <p style="color: var(--danger-color);">ไม่พบบัญชีที่ผูกกับเป้าหมาย</p>
                    </div>
                </div>
            `;
            return;
        }

        // Calculate progress
        const progress = (account.balance / activeGoal.target) * 100;
        const daysLeft = Math.ceil((new Date(activeGoal.endDate) - new Date()) / (1000 * 60 * 60 * 24));
        
        // Calculate streak
        const streak = this.calculateStreak(activeGoal);
        const today = new Date().toISOString().split('T')[0];

        // Get today's income transactions to this account (any income counts as "filling" the goal account)
        // This includes both transfers and direct income entries
        const todayTransfers = this.data.transactions.filter(t => {
            // Must be income to the goal account
            if (t.accountId !== activeGoal.accountId || t.type !== 'income') return false;
            
            // Get transaction date - use timestamp if available (more accurate), otherwise use date field
            let transactionDate = null;
            if (t.timestamp) {
                transactionDate = new Date(t.timestamp).toISOString().split('T')[0];
            } else if (t.date) {
                transactionDate = t.date;
            } else {
                return false; // No date information
            }
            
            // Check if date matches today (compare date strings)
            return transactionDate === today;
        });
        const todayTransferAmount = todayTransfers.reduce((sum, t) => sum + t.amount, 0);
        const hasTransferToday = todayTransferAmount >= 1;
        
        // Debug: Log transfer detection results
        console.log('=== Transfer Detection Debug ===');
        console.log('Today date:', today);
        console.log('Active goal accountId:', activeGoal.accountId);
        console.log('Found transfers today:', todayTransfers.length);
        if (todayTransfers.length > 0) {
            console.log('Transfer details:', todayTransfers);
        } else {
            // Show all income transactions for this account today for debugging
            const allTodayIncome = this.data.transactions.filter(t => {
                if (t.accountId !== activeGoal.accountId || t.type !== 'income') return false;
                let transactionDate = null;
                if (t.timestamp) {
                    transactionDate = new Date(t.timestamp).toISOString().split('T')[0];
                } else if (t.date) {
                    transactionDate = t.date;
                }
                return transactionDate === today;
            });
            console.log('All income transactions today:', allTodayIncome);
            if (allTodayIncome.length > 0) {
                console.log('Why not detected as transfer?');
                allTodayIncome.forEach(t => {
                    const noteText = (t.note || '').toLowerCase();
                    const isTransfer = t.category === 'โอนเงิน' || 
                                      noteText.includes('โอน') || 
                                      noteText.includes('รับจาก');
                    console.log(`Transaction ${t.id}: category="${t.category}", note="${t.note}", isTransfer=${isTransfer}`);
                });
            }
        }
        console.log('Transfer amount today:', todayTransferAmount);
        console.log('Has transfer today:', hasTransferToday);
        console.log('===============================');

        const progressColor = progress >= 100 ? 'var(--success-color)' : progress >= 80 ? 'var(--warning-color)' : 'var(--primary-color)';
        const streakColor = hasTransferToday ? 'var(--success-color)' : 'var(--warning-color)';

        savingsGoalDisplay.innerHTML = `
            <div class="budget-card">
                <div style="margin-bottom: 1rem;">
                    <h3 style="margin-bottom: 0.5rem;">${activeGoal.name}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">
                        บัญชี: ${account.name} | วันสิ้นสุด: ${this.formatDate(activeGoal.endDate)} (${daysLeft} วัน)
                    </p>
                </div>
                <div class="budget-usage">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; align-items: center;">
                        <div>
                            <h3 style="margin-bottom: 0.25rem; font-size: 1rem;">ยอดออมปัจจุบัน</h3>
                            <p style="font-size: 1.5rem; font-weight: bold; color: ${progressColor}; margin: 0;">
                                ฿${account.balance.toFixed(2)}
                            </p>
                        </div>
                        <div style="text-align: right;">
                            <p style="color: var(--text-secondary); margin-bottom: 0.25rem;">เป้าหมาย</p>
                            <p style="font-size: 1.2rem; font-weight: bold; color: ${progressColor}; margin: 0;">
                                ฿${activeGoal.target.toFixed(2)}
                            </p>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${Math.min(progress, 100)}%; background: ${progressColor};">
                            ${progress.toFixed(0)}%
                        </div>
                    </div>
                </div>
                <div class="streak-display">
                    <span class="streak-count" style="color: ${streakColor};">
                        🔥 ${streak}
                    </span>
                    <span class="streak-label">
                        วันติดต่อกัน (เติมเงินอย่างน้อย 1 บาท/วัน)
                    </span>
                    ${!hasTransferToday ? `
                        <span style="margin-left: auto; color: var(--warning-color); font-size: 0.85rem;">
                            ⚠️ ยังไม่เติมเงินวันนี้
                        </span>
                    ` : `
                        <span style="margin-left: auto; color: var(--success-color); font-size: 0.85rem;">
                            ✓ เติมเงินแล้ววันนี้ (฿${todayTransferAmount.toFixed(2)})
                        </span>
                    `}
                </div>
            </div>
        `;
    }

    calculateStreak(goal) {
        if (!goal.accountId) return 0;

        // Get all income transactions to this account (any income counts for streak)
        // This includes both transfers and direct income entries
        const transfers = this.data.transactions
            .filter(t => {
                // Any income to the goal account counts
                return t.accountId === goal.accountId && t.type === 'income';
            })
            .map(t => {
                // Normalize date format - use timestamp if available (more accurate)
                let date = null;
                if (t.timestamp) {
                    date = new Date(t.timestamp).toISOString().split('T')[0];
                } else if (t.date) {
                    date = t.date;
                }
                return { ...t, date };
            })
            .filter(t => t.date !== null) // Remove transactions without valid date
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        if (transfers.length === 0) return 0;

        // Group by date and check if at least 1 baht per day
        const transfersByDate = {};
        transfers.forEach(t => {
            if (!transfersByDate[t.date]) {
                transfersByDate[t.date] = 0;
            }
            transfersByDate[t.date] += t.amount;
        });

        // Calculate consecutive days with at least 1 baht transfer
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayStr = today.toISOString().split('T')[0];
        let streak = 0;
        let currentDate = new Date(today);

        // Start from today and go backwards
        while (true) {
            const dateStr = currentDate.toISOString().split('T')[0];
            const amount = transfersByDate[dateStr] || 0;

            if (amount >= 1) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }

        console.log('Streak calculation:', {
            transfersFound: transfers.length,
            transfersByDate,
            todayStr,
            streak
        });

        return streak;
    }

    showPersistentNotification(message, type = 'warning') {
        // Remove existing persistent notification
        const existing = document.getElementById('persistentNotification');
        if (existing) {
            existing.remove();
        }
        
        const notification = document.createElement('div');
        notification.id = 'persistentNotification';
        notification.className = `persistent-notification ${type === 'error' ? 'persistent-notification-error' : 'persistent-notification-warning'}`;
        
        const icon = type === 'error' ? '🚨' : '⚠️';
        const bgColor = type === 'error' ? 'var(--danger-color)' : 'var(--warning-color)';
        const animation = type === 'error' ? 'notificationSlideInError 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'notificationSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        const padding = type === 'error' ? '1.25rem 1.75rem' : '1rem 1.5rem';
        const boxShadow = type === 'error' 
            ? '0 6px 30px rgba(231, 76, 60, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.2), 0 0 20px rgba(231, 76, 60, 0.3)'
            : '0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)';
        
        notification.innerHTML = `
            <div class="persistent-notification-content">
                <span class="persistent-notification-icon ${type === 'error' ? 'pulse-animation' : ''}">${icon}</span>
                <span class="persistent-notification-message">${message}</span>
                <button class="persistent-notification-close" onclick="app.hidePersistentNotification()" aria-label="ปิด">×</button>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: ${bgColor};
            color: white;
            padding: ${padding};
            border-radius: ${type === 'error' ? '16px' : '12px'};
            box-shadow: ${boxShadow};
            z-index: 9999;
            min-width: ${type === 'error' ? '350px' : '300px'};
            max-width: 90%;
            animation: ${animation};
            backdrop-filter: blur(10px);
            font-weight: ${type === 'error' ? '600' : '500'};
            border: ${type === 'error' ? '2px solid rgba(255, 255, 255, 0.3)' : 'none'};
        `;
        
        document.body.appendChild(notification);
        
        // Add pulse effect for error type
        if (type === 'error') {
            notification.style.animation += ', persistentNotificationPulse 2s ease-in-out infinite';
        }
    }

    hidePersistentNotification() {
        const notification = document.getElementById('persistentNotification');
        if (notification) {
            notification.style.animation = 'notificationSlideOut 0.3s cubic-bezier(0.4, 0, 1, 1)';
            setTimeout(() => notification.remove(), 300);
        }
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
            const timeDisplay = t.time ? ` • ${t.time}` : '';
            return `
                <div class="transaction-item ${t.type}">
                    <div class="transaction-info">
                        <h4>${t.category}</h4>
                        <p>${account?.name || ''} • ${this.formatDate(t.date)}${timeDisplay}</p>
                        ${t.note ? `<p class="text-secondary">${t.note}</p>` : ''}
                    </div>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div class="transaction-amount ${t.type}" onclick="app.toggleHideBalance()" style="cursor: pointer;">
                            ${this.data.settings.hideBalance ? '••••' : (t.type === 'income' ? '+' : '-') + '฿' + t.amount.toFixed(2)}
                        </div>
                        <button class="btn-delete" onclick="app.deleteTransaction(${t.id})" aria-label="${this.t('delete')}" title="${this.t('delete')}">
                            🗑️
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateAccounts() {
        const accountsList = document.getElementById('accountsList');
        if (accountsList) {
            if (this.data.accounts.length === 0) {
                accountsList.innerHTML = `<div class="empty-state"><p>${this.t('no_accounts')}</p></div>`;
            } else {
                accountsList.innerHTML = this.data.accounts.map(acc => `
                    <div class="account-card">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                                <div class="account-color-bar" style="background-color: ${acc.color}; width: 4px; height: 100%; border-radius: 2px; min-height: 60px;"></div>
                                <div style="flex: 1;">
                                    <h3>${acc.name}</h3>
                                    <p class="balance-amount" style="font-size: 1.5rem;">
                                        ฿${acc.balance.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <div style="width: 50px; height: 50px; border-radius: 50%; background: ${acc.color}; cursor: pointer;" onclick="app.showEditAccountModal(${acc.id})" title="${this.t('edit')}"></div>
                                <button class="btn-delete" onclick="app.deleteAccount(${acc.id})" aria-label="${this.t('delete')}" title="${this.t('delete')}">
                                    🗑️
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Show/hide transfer section in accounts view
        const transferSection = document.getElementById('transferSection');
        if (transferSection) {
            transferSection.style.display = this.data.accounts.length >= 2 ? 'block' : 'none';
        }

        // Update select options
        const accountSelects = document.querySelectorAll('#account, #fromAccount, #toAccount, #accountModal, #fromAccountModal, #toAccountModal');
        accountSelects.forEach(select => {
            if (select) {
                select.innerHTML = this.data.accounts.map(acc => 
                    `<option value="${acc.id}">${acc.name}</option>`
                ).join('');
            }
        });

        // Update account filter dropdown for charts
        const accountFilter = document.getElementById('accountFilter');
        if (accountFilter) {
            const currentValue = accountFilter.value;
            accountFilter.innerHTML = '<option value="all">ทั้งหมด</option>' + 
                this.data.accounts.map(acc => 
                    `<option value="${acc.id}">${acc.name}</option>`
                ).join('');
            // Restore previous selection if it still exists
            if (currentValue && Array.from(accountFilter.options).some(opt => opt.value === currentValue)) {
                accountFilter.value = currentValue;
            } else {
                accountFilter.value = 'all';
            }
        }
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
        // Update transactions list view
        const transactionsList = document.getElementById('transactionsList');
        if (transactionsList) {
            const allTransactions = [...this.data.transactions]
                .sort((a, b) => new Date(b.timestamp || b.date) - new Date(a.timestamp || a.date));

            if (allTransactions.length === 0) {
                transactionsList.innerHTML = `<div class="empty-state"><p>${this.t('no_data')}</p></div>`;
                return;
            }

            transactionsList.innerHTML = allTransactions.map(t => {
                const account = this.data.accounts.find(a => a.id === t.accountId);
                const timeDisplay = t.time ? ` • ${t.time}` : '';
                return `
                    <div class="transaction-item ${t.type}">
                        <div class="transaction-info">
                            <h4>${t.category}</h4>
                            <p>${account?.name || ''} • ${this.formatDate(t.date)}${timeDisplay}</p>
                            ${t.note ? `<p class="text-secondary" style="color: var(--text-secondary); margin-top: 0.25rem;">${t.note}</p>` : ''}
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div class="transaction-amount ${t.type}" onclick="app.toggleHideBalance()" style="cursor: pointer;">
                                ${this.data.settings.hideBalance ? '••••' : (t.type === 'income' ? '+' : '-') + '฿' + t.amount.toFixed(2)}
                            </div>
                            <button class="btn-delete" onclick="app.deleteTransaction(${t.id})" aria-label="${this.t('delete')}" title="${this.t('delete')}">
                                🗑️
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        // Also update recent transactions for dashboard
        this.updateRecentTransactions();
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
            const isReturned = lend.isReturned || false;
            const status = isReturned ? 'returned' :
                          lend.paid >= lend.amount ? 'completed' : 
                          daysLeft < 0 ? 'overdue' : 'pending';
            const account = lend.accountId ? this.data.accounts.find(a => a.id === lend.accountId) : null;
            const accountName = account ? account.name : 'ไม่ระบุบัญชี';
            const typeClass = lend.type === 'borrow' ? 'borrow' : 'lend';
            const returnedClass = isReturned ? 'returned' : '';

            return `
                <div class="lending-item ${typeClass} ${returnedClass}">
                    <h3>${lend.personName}</h3>
                    <p><strong>${lend.type === 'borrow' ? 'ยืม' : 'ให้ยืม'}:</strong> ฿${lend.amount.toFixed(2)}</p>
                    <p>บัญชี: ${accountName}</p>
                    <p>ชำระแล้ว: ฿${lend.paid.toFixed(2)}</p>
                    <p>ครบกำหนด: ${this.formatDate(lend.dueDate)} (${daysLeft} วัน)</p>
                    <span class="lending-status ${status}">
                        ${status === 'returned' ? '✓ คืนแล้ว' :
                          status === 'completed' ? 'ชำระครบ' : 
                          status === 'overdue' ? 'เกินกำหนด' : 'รอชำระ'}
                    </span>
                    ${!isReturned ? `<button class="btn-return" onclick="app.markLendingAsReturned(${lend.id})">✓ ทำเครื่องหมายว่าคืนแล้ว</button>` : ''}
                </div>
            `;
        }).join('');
    }

    // Helper function to get CSS variable value
    getCSSVariable(variableName, fallback = '') {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim() || fallback;
    }

    // Create or get chart tooltip element
    getChartTooltip() {
        if (!this.chartTooltip) {
            this.chartTooltip = document.createElement('div');
            this.chartTooltip.id = 'chartTooltip';
            this.chartTooltip.style.cssText = `
                position: fixed;
                background: var(--surface-color);
                color: var(--text-color);
                padding: 0.75rem 1rem;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                font-size: 0.9rem;
                font-weight: 500;
                pointer-events: none;
                z-index: 10001;
                opacity: 0;
                transition: opacity 0.2s;
                border: 1px solid var(--border-color);
                white-space: nowrap;
            `;
            document.body.appendChild(this.chartTooltip);
        }
        return this.chartTooltip;
    }

    showChartTooltip(text, x, y) {
        const tooltip = this.getChartTooltip();
        tooltip.textContent = text;
        tooltip.style.left = `${x + 10}px`;
        tooltip.style.top = `${y - 40}px`;
        tooltip.style.opacity = '1';
    }

    hideChartTooltip() {
        if (this.chartTooltip) {
            this.chartTooltip.style.opacity = '0';
        }
    }

    // Helper function to adjust color brightness
    adjustColor(color, percent) {
        const num = parseInt(color.replace("#",""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, Math.max(0, (num >> 16) + amt));
        const G = Math.min(255, Math.max(0, (num >> 8 & 0x00FF) + amt));
        const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
        return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    // Helper function to get colors that work well in both light and dark mode
    getChartColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            // Brighter colors for dark mode
            return [
                '#ff6b6b', // Bright Red
                '#4ecdc4', // Turquoise
                '#45b7d1', // Sky Blue
                '#f9ca24', // Yellow
                '#6c5ce7', // Purple
                '#00b894', // Green
                '#fd79a8', // Pink
                '#fdcb6e', // Light Orange
                '#a29bfe', // Light Purple
                '#55efc4'  // Mint
            ];
        } else {
            // Standard colors for light mode
            return [
                '#e74c3c', // Red
                '#3498db', // Blue
                '#2ecc71', // Green
                '#f39c12', // Orange
                '#9b59b6', // Purple
                '#1abc9c', // Turquoise
                '#e67e22', // Dark Orange
                '#95a5a6', // Gray
                '#34495e', // Dark Gray
                '#16a085'  // Dark Green
            ];
        }
    }

    updateCharts() {
        // Only update charts if the view is visible
        const expenseChart = document.getElementById('expenseChart');
        if (expenseChart && expenseChart.closest('.view.active')) {
            this.updateExpenseChart();
        }
        
        const weeklyChart = document.getElementById('weeklyChart') || document.getElementById('weeklyChartModal');
        if (weeklyChart && (weeklyChart.closest('.view.active') || weeklyChart.closest('.modal.active'))) {
            this.updateWeeklyChart();
        }
        
        const monthlyChart = document.getElementById('monthlyChart') || document.getElementById('monthlyChartModal');
        if (monthlyChart && (monthlyChart.closest('.view.active') || monthlyChart.closest('.modal.active'))) {
            this.updateMonthlyChart();
        }
    }

    updateExpenseChart() {
        const canvas = document.getElementById('expenseChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        // Get selected account filter
        const accountFilter = document.getElementById('accountFilter');
        const selectedAccountId = accountFilter ? accountFilter.value : 'all';

        let monthlyExpenses = this.data.transactions.filter(t => {
            const tDate = new Date(t.date);
            const matchesDate = t.type === 'expense' &&
                   tDate.getMonth() === currentMonth &&
                   tDate.getFullYear() === currentYear;
            
            // Filter by account if not "all"
            if (selectedAccountId !== 'all' && matchesDate) {
                return t.accountId === parseInt(selectedAccountId);
            }
            return matchesDate;
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
            ctx.fillStyle = this.getCSSVariable('--text-secondary', '#6c757d');
            ctx.textAlign = 'center';
            ctx.font = '16px sans-serif';
            ctx.fillText(this.t('no_data'), canvas.width / 2, canvas.height / 2);
            return;
        }

        const total = amounts.reduce((sum, amount) => sum + amount, 0);
        const colors = this.getChartColors();
        
        // Center and radius for donut chart
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const isMobile = canvas.width < 600;
        const radius = Math.min(canvas.width, canvas.height) * (isMobile ? 0.25 : 0.3);
        const innerRadius = radius * 0.6; // Inner radius for donut hole
        const legendX = isMobile ? 10 : centerX + radius + 30;
        const legendY = isMobile ? radius * 2 + 20 : centerY - (categories.length * 20) / 2;

        // Clear canvas with background color
        ctx.fillStyle = this.getCSSVariable('--surface-color', '#f8f9fa');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let currentAngle = -Math.PI / 2; // Start from top

        // Store slice data for click detection
        this.chartBarData.expense = [];

        categories.forEach((cat, i) => {
            const sliceAngle = (amounts[i] / total) * 2 * Math.PI;
            const color = colors[i % colors.length];
            const percentage = ((amounts[i] / total) * 100).toFixed(1);

            // Check if this slice is hovered
            const isHovered = this.hoveredBar?.type === 'expense' && this.hoveredBar?.index === i;
            const sliceColor = isHovered ? this.adjustColor(color, 15) : color;

            // Draw outer arc
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
            ctx.closePath();
            ctx.fillStyle = sliceColor;
            ctx.fill();

            // Draw border - thicker if hovered
            ctx.strokeStyle = isHovered ? sliceColor : this.getCSSVariable('--surface-color', '#f8f9fa');
            ctx.lineWidth = isHovered ? 4 : 3;
            ctx.stroke();

            // Store slice data for hover detection
            this.chartBarData.expense.push({
                category: cat,
                amount: amounts[i],
                percentage: percentage,
                startAngle: currentAngle,
                endAngle: currentAngle + sliceAngle,
                centerX: centerX,
                centerY: centerY,
                innerRadius: innerRadius,
                outerRadius: radius,
                color: color
            });

            // Draw legend
            const legendYPos = legendY + (i * 20);
            ctx.fillStyle = sliceColor;
            ctx.fillRect(legendX, legendYPos - 8, 12, 12);
            
            ctx.fillStyle = this.getCSSVariable('--text-color', '#212529');
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(`${cat}: ฿${amounts[i].toFixed(2)} (${percentage}%)`, legendX + 18, legendYPos + 2);

            // Draw label on slice (if slice is big enough)
            if (sliceAngle > 0.3) {
                const labelAngle = currentAngle + sliceAngle / 2;
                const labelX = centerX + Math.cos(labelAngle) * (radius + innerRadius) / 2;
                const labelY = centerY + Math.sin(labelAngle) * (radius + innerRadius) / 2;
                
                // Use white text with shadow for better visibility on colored slices
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 11px sans-serif';
                ctx.textAlign = 'center';
                ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                ctx.shadowBlur = 2;
                ctx.fillText(`${percentage}%`, labelX, labelY);
                ctx.shadowBlur = 0;
            }

            currentAngle += sliceAngle;
        });

        // Draw center text (total)
        ctx.fillStyle = this.getCSSVariable('--text-secondary', '#6c757d');
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('รวม', centerX, centerY - 8);
        ctx.fillStyle = this.getCSSVariable('--text-color', '#212529');
        ctx.font = 'bold 18px sans-serif';
        ctx.fillText(`฿${total.toFixed(2)}`, centerX, centerY + 12);

        // Add hover event listeners
        canvas.style.cursor = 'pointer';
        
        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Calculate distance from center and angle
            const dx = clickX - centerX;
            const dy = clickY - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Check if hover is within donut (between inner and outer radius)
            if (distance >= innerRadius && distance <= radius) {
                // Calculate angle (adjust for starting from top)
                let angle = Math.atan2(dy, dx);
                // Normalize angle to start from top (-PI/2)
                angle = angle + Math.PI / 2;
                if (angle < 0) angle += 2 * Math.PI;

                // Find which slice is hovered
                let found = false;
                this.chartBarData.expense.forEach((slice, i) => {
                    let startAngle = slice.startAngle + Math.PI / 2;
                    let endAngle = slice.endAngle + Math.PI / 2;
                    
                    // Normalize angles
                    if (startAngle < 0) startAngle += 2 * Math.PI;
                    if (endAngle < 0) endAngle += 2 * Math.PI;
                    
                    let isInSlice = false;
                    // Handle wrap-around case
                    if (startAngle > endAngle) {
                        isInSlice = angle >= startAngle || angle <= endAngle;
                    } else {
                        isInSlice = angle >= startAngle && angle <= endAngle;
                    }
                    
                    if (isInSlice) {
                        if (this.hoveredBar?.type !== 'expense' || this.hoveredBar?.index !== i) {
                            this.hoveredBar = { type: 'expense', index: i };
                            this.updateExpenseChart(); // Redraw to show highlight
                        }
                        this.showChartTooltip(`${slice.category}: ฿${slice.amount.toFixed(2)} (${slice.percentage}%)`, mouseX, mouseY);
                        found = true;
                    }
                });
                
                if (!found && this.hoveredBar?.type === 'expense') {
                    this.hoveredBar = null;
                    this.updateExpenseChart(); // Redraw to remove highlight
                    this.hideChartTooltip();
                }
            } else {
                if (this.hoveredBar?.type === 'expense') {
                    this.hoveredBar = null;
                    this.updateExpenseChart(); // Redraw to remove highlight
                }
                this.hideChartTooltip();
            }
        };

        canvas.onmouseleave = () => {
            if (this.hoveredBar?.type === 'expense') {
                this.hoveredBar = null;
                this.updateExpenseChart(); // Redraw to remove highlight
            }
            this.hideChartTooltip();
        };
    }

    navigateWeek(direction) {
        this.weekOffset += direction;
        this.updateWeeklyChart();
    }

    resetWeek() {
        this.weekOffset = 0;
        this.updateWeeklyChart();
    }

    navigateMonth(direction) {
        this.monthOffset += direction;
        this.updateMonthlyChart();
    }

    resetMonth() {
        this.monthOffset = 0;
        this.updateMonthlyChart();
    }

    updateWeeklyChart() {
        const canvas = document.getElementById('weeklyChart') || document.getElementById('weeklyChartModal');
        
        const now = new Date();
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay() - (this.weekOffset * 7));

        // Update label
        const labelEl = document.getElementById('weeklyChartLabel');
        if (labelEl) {
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            const startStr = weekStart.toLocaleDateString(this.currentLang === 'th' ? 'th-TH' : 'en-US', { day: 'numeric', month: 'short' });
            const endStr = weekEnd.toLocaleDateString(this.currentLang === 'th' ? 'th-TH' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });
            labelEl.textContent = `${startStr} - ${endStr}`;
        }

        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Get selected account filter
        const accountFilter = document.getElementById('accountFilter');
        const selectedAccountId = accountFilter ? accountFilter.value : 'all';

        const weekData = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];

            let dayTransactions = this.data.transactions.filter(t => t.type === 'expense' && t.date === dateStr);
            
            // Filter by account if not "all"
            if (selectedAccountId !== 'all') {
                dayTransactions = dayTransactions.filter(t => t.accountId === parseInt(selectedAccountId));
            }

            const dayExpenses = dayTransactions.reduce((sum, t) => sum + t.amount, 0);
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

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const primaryColor = this.getCSSVariable('--primary-color', '#4a90e2');
        const textColor = this.getCSSVariable('--text-color', '#212529');

        // Store bar positions for click detection
        this.chartBarData.weekly = [];

        weekData.forEach((amount, i) => {
            const height = (amount / maxAmount) * (canvas.height - 60);
            const x = i * dayWidth;
            const y = canvas.height - height - 30;

            // Draw bar
            const barX = x + 10;
            const barY = y;
            const barWidth = dayWidth - 20;
            
            // Highlight if hovered
            const isHovered = this.hoveredBar?.type === 'weekly' && this.hoveredBar?.index === i;
            ctx.fillStyle = isHovered ? this.adjustColor(primaryColor, 20) : primaryColor;
            ctx.fillRect(barX, barY, barWidth, height);
            if (isHovered) {
                ctx.strokeStyle = primaryColor;
                ctx.lineWidth = 2;
                ctx.strokeRect(barX, barY, barWidth, height);
            }

            // Store bar position
            this.chartBarData.weekly.push({
                day: days[i],
                x: barX,
                y: barY,
                width: barWidth,
                height: height,
                amount: amount
            });

            // Draw day label
            ctx.fillStyle = textColor;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(days[i], x + dayWidth / 2, canvas.height - 10);
            
            // Draw amount label
            if (amount > 0) {
                ctx.fillStyle = textColor;
                ctx.font = 'bold 11px sans-serif';
                ctx.fillText(`฿${amount.toFixed(0)}`, x + dayWidth / 2, y - 5);
            }
        });

        // Add hover event listeners
        canvas.style.cursor = 'pointer';
        
        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            let found = false;
            this.chartBarData.weekly.forEach((bar, i) => {
                if (x >= bar.x && x <= bar.x + bar.width &&
                    y >= bar.y && y <= bar.y + bar.height) {
                    if (this.hoveredBar?.type !== 'weekly' || this.hoveredBar?.index !== i) {
                        this.hoveredBar = { type: 'weekly', index: i };
                        this.updateWeeklyChart(); // Redraw to show highlight
                    }
                    this.showChartTooltip(`${bar.day} - ${this.t('daily_expense')}: ฿${bar.amount.toFixed(2)}`, mouseX, mouseY);
                    found = true;
                    return;
                }
            });

            if (!found) {
                if (this.hoveredBar?.type === 'weekly') {
                    this.hoveredBar = null;
                    this.updateWeeklyChart(); // Redraw to remove highlight
                }
                this.hideChartTooltip();
            }
        };

        canvas.onmouseleave = () => {
            if (this.hoveredBar?.type === 'weekly') {
                this.hoveredBar = null;
                this.updateWeeklyChart(); // Redraw to remove highlight
            }
            this.hideChartTooltip();
        };
    }

    updateMonthlyChart() {
        const canvas = document.getElementById('monthlyChart') || document.getElementById('monthlyChartModal');
        
        const now = new Date();
        const months = [];
        const incomeData = [];
        const expenseData = [];

        // Update label
        const labelEl = document.getElementById('monthlyChartLabel');
        if (labelEl) {
            const startMonth = new Date(now.getFullYear(), now.getMonth() - 5 - this.monthOffset, 1);
            const endMonth = new Date(now.getFullYear(), now.getMonth() - this.monthOffset, 1);
            const startStr = startMonth.toLocaleDateString(this.currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short', year: 'numeric' });
            const endStr = endMonth.toLocaleDateString(this.currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short', year: 'numeric' });
            labelEl.textContent = `${startStr} - ${endStr}`;
        }

        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Get selected account filter
        const accountFilter = document.getElementById('accountFilter');
        const selectedAccountId = accountFilter ? accountFilter.value : 'all';

        for (let i = 5; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i - this.monthOffset, 1);
            months.push(date.toLocaleDateString(this.currentLang === 'th' ? 'th-TH' : 'en-US', { month: 'short' }));

            let monthTransactions = this.data.transactions.filter(t => {
                const tDate = new Date(t.date);
                return tDate.getMonth() === date.getMonth() &&
                       tDate.getFullYear() === date.getFullYear();
            });

            // Filter by account if not "all"
            if (selectedAccountId !== 'all') {
                monthTransactions = monthTransactions.filter(t => t.accountId === parseInt(selectedAccountId));
            }

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

        const successColor = this.getCSSVariable('--success-color', '#50c878');
        const dangerColor = this.getCSSVariable('--danger-color', '#e74c3c');
        const textColor = this.getCSSVariable('--text-color', '#212529');

        // Store bar positions for click detection
        this.chartBarData.monthly = [];

        months.forEach((month, i) => {
            const incomeHeight = (incomeData[i] / maxAmount) * (canvas.height - 60);
            const expenseHeight = (expenseData[i] / maxAmount) * (canvas.height - 60);
            const x = i * monthWidth;

            // Income bar
            const incomeBarX = x + 10;
            const incomeBarY = canvas.height - incomeHeight - 30;
            const incomeBarWidth = (monthWidth - 30) / 2;
            
            // Highlight if hovered
            const isHoveredIncome = this.hoveredBar?.type === 'monthly-income' && this.hoveredBar?.index === i;
            ctx.fillStyle = isHoveredIncome ? this.adjustColor(successColor, 20) : successColor;
            ctx.fillRect(incomeBarX, incomeBarY, incomeBarWidth, incomeHeight);
            if (isHoveredIncome) {
                ctx.strokeStyle = successColor;
                ctx.lineWidth = 2;
                ctx.strokeRect(incomeBarX, incomeBarY, incomeBarWidth, incomeHeight);
            }

            // Expense bar
            const expenseBarX = x + 10 + (monthWidth - 30) / 2;
            const expenseBarY = canvas.height - expenseHeight - 30;
            const expenseBarWidth = (monthWidth - 30) / 2;
            
            // Highlight if hovered
            const isHoveredExpense = this.hoveredBar?.type === 'monthly-expense' && this.hoveredBar?.index === i;
            ctx.fillStyle = isHoveredExpense ? this.adjustColor(dangerColor, 20) : dangerColor;
            ctx.fillRect(expenseBarX, expenseBarY, expenseBarWidth, expenseHeight);
            if (isHoveredExpense) {
                ctx.strokeStyle = dangerColor;
                ctx.lineWidth = 2;
                ctx.strokeRect(expenseBarX, expenseBarY, expenseBarWidth, expenseHeight);
            }

            // Store bar positions
            this.chartBarData.monthly.push({
                month: month,
                income: {
                    x: incomeBarX,
                    y: incomeBarY,
                    width: incomeBarWidth,
                    height: incomeHeight,
                    amount: incomeData[i]
                },
                expense: {
                    x: expenseBarX,
                    y: expenseBarY,
                    width: expenseBarWidth,
                    height: expenseHeight,
                    amount: expenseData[i]
                }
            });

            ctx.fillStyle = textColor;
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(month, x + monthWidth / 2, canvas.height - 10);
        });

        // Add hover event listeners
        canvas.style.cursor = 'pointer';
        let hoverTimeout = null;
        
        canvas.onmousemove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            let found = false;
            this.chartBarData.monthly.forEach((bar, i) => {
                // Check income bar
                if (x >= bar.income.x && x <= bar.income.x + bar.income.width &&
                    y >= bar.income.y && y <= bar.income.y + bar.income.height) {
                    if (this.hoveredBar?.type !== 'monthly-income' || this.hoveredBar?.index !== i) {
                        this.hoveredBar = { type: 'monthly-income', index: i };
                        this.updateMonthlyChart(); // Redraw to show highlight
                    }
                    this.showChartTooltip(`${bar.month} - ${this.t('monthly_income')}: ฿${bar.income.amount.toFixed(2)}`, mouseX, mouseY);
                    found = true;
                    return;
                }
                // Check expense bar
                if (x >= bar.expense.x && x <= bar.expense.x + bar.expense.width &&
                    y >= bar.expense.y && y <= bar.expense.y + bar.expense.height) {
                    if (this.hoveredBar?.type !== 'monthly-expense' || this.hoveredBar?.index !== i) {
                        this.hoveredBar = { type: 'monthly-expense', index: i };
                        this.updateMonthlyChart(); // Redraw to show highlight
                    }
                    this.showChartTooltip(`${bar.month} - ${this.t('monthly_expense')}: ฿${bar.expense.amount.toFixed(2)}`, mouseX, mouseY);
                    found = true;
                    return;
                }
            });

            if (!found) {
                if (this.hoveredBar?.type?.startsWith('monthly')) {
                    this.hoveredBar = null;
                    this.updateMonthlyChart(); // Redraw to remove highlight
                }
                this.hideChartTooltip();
            }
        };

        canvas.onmouseleave = () => {
            if (this.hoveredBar?.type?.startsWith('monthly')) {
                this.hoveredBar = null;
                this.updateMonthlyChart(); // Redraw to remove highlight
            }
            this.hideChartTooltip();
        };
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

    showAddTransactionModal(type = null) {
        // Check if there are any accounts
        if (this.data.accounts.length === 0) {
            this.showNotification(this.t('please_add_account'), 'error');
            setTimeout(() => {
                this.showAccountsModal();
            }, 500);
            return;
        }

        // If type is specified, use it; otherwise show radio buttons
        const transactionType = type || 'income';
        const showTypeSelector = type === null;

        const content = `
            <form id="transactionFormModal">
                ${showTypeSelector ? `
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
                ` : `<input type="hidden" name="type" value="${transactionType}">`}
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
                    <label for="timeModal" data-i18n="time">เวลา</label>
                    <input type="time" id="timeModal" value="12:00">
                </div>
                <div class="form-group">
                    <label for="noteModal" data-i18n="note">โน้ต</label>
                    <textarea id="noteModal" rows="3"></textarea>
                </div>
                <button type="submit" class="btn-primary" data-i18n="save">บันทึก</button>
            </form>
        `;
        const modalTitle = type === 'income' ? this.t('add_income') : 
                          type === 'expense' ? this.t('add_expense') : 
                          this.t('add_transaction');
        this.showModal(modalTitle, content);
        this.updateTranslations();
        
        // Populate selects
        const accountSelect = document.getElementById('accountModal');
        accountSelect.innerHTML = this.data.accounts.map(acc => 
            `<option value="${acc.id}">${acc.name}</option>`
        ).join('');
        
        const categorySelect = document.getElementById('categoryModal');
        categorySelect.innerHTML = this.data.categories[transactionType].map(cat => 
            `<option value="${cat}">${cat}</option>`
        ).join('');
        
        // Update categories when type changes (only if type selector is shown)
        if (showTypeSelector) {
            document.querySelectorAll('input[name="type"]').forEach(radio => {
                radio.addEventListener('change', () => {
                    const newType = document.querySelector('input[name="type"]:checked').value;
                    categorySelect.innerHTML = this.data.categories[newType].map(cat => 
                        `<option value="${cat}">${cat}</option>`
                    ).join('');
                });
            });
        }
        
        // Set default date and time
        const now = new Date();
        document.getElementById('dateModal').value = now.toISOString().split('T')[0];
        const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        document.getElementById('timeModal').value = currentTime;
        
        // Handle form submit
        document.getElementById('transactionFormModal').addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const dateValue = document.getElementById('dateModal').value;
            const timeValue = document.getElementById('timeModal').value;
            const dateTime = new Date(dateValue + 'T' + timeValue);
            
            const transaction = {
                id: Date.now(),
                type: formData.get('type'),
                amount: parseFloat(document.getElementById('amountModal').value),
                accountId: parseInt(document.getElementById('accountModal').value),
                category: document.getElementById('categoryModal').value,
                date: dateValue,
                time: timeValue,
                note: document.getElementById('noteModal').value || '',
                timestamp: dateTime.toISOString()
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

    showAddIncomeModal() {
        this.showAddTransactionModal('income');
    }

    showAddExpenseModal() {
        this.showAddTransactionModal('expense');
    }

    showAddCategoryModal(type = null) {
        const currentType = type || document.querySelector('input[name="type"]:checked')?.value || 'income';
        const content = `
            <form id="addCategoryForm">
                <div class="form-group">
                    <label data-i18n="type">ประเภท</label>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="categoryType" value="income" ${currentType === 'income' ? 'checked' : ''}>
                            <span data-i18n="income">รายรับ</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="categoryType" value="expense" ${currentType === 'expense' ? 'checked' : ''}>
                            <span data-i18n="expense">รายจ่าย</span>
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label data-i18n="category_name">ชื่อหมวดหมู่</label>
                    <input type="text" id="categoryName" required>
                </div>
                <button type="submit" class="btn-primary" data-i18n="add_category">เพิ่มหมวดหมู่</button>
            </form>
        `;
        this.showModal(this.t('add_category'), content);
        this.updateTranslations();
        
        document.getElementById('addCategoryForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const selectedType = document.querySelector('input[name="categoryType"]:checked').value;
            const name = document.getElementById('categoryName').value.trim();
            
            if (!name) {
                this.showNotification('กรุณากรอกชื่อหมวดหมู่', 'error');
                return;
            }
            
            // Check if category already exists
            if (this.data.categories[selectedType].includes(name)) {
                this.showNotification('หมวดหมู่นี้มีอยู่แล้ว', 'error');
                return;
            }
            
            // Add category
            this.data.categories[selectedType].push(name);
            this.saveData();
            
            // Update category select in transaction form if modal is still open
            const categorySelect = document.getElementById('categoryModal');
            if (categorySelect) {
                const currentType = document.querySelector('input[name="type"]:checked')?.value || 'income';
                if (currentType === selectedType) {
                    categorySelect.innerHTML = this.data.categories[selectedType].map(cat => 
                        `<option value="${cat}">${cat}</option>`
                    ).join('');
                    categorySelect.value = name; // Select the newly added category
                }
            }
            
            this.closeModal();
            this.showNotification('เพิ่มหมวดหมู่สำเร็จ!');
            
            // Refresh category management modal if it was open before
            // We check by looking for the modal title
            const modalTitle = document.getElementById('modalTitle');
            if (modalTitle && modalTitle.textContent === 'จัดการหมวดหมู่') {
                setTimeout(() => {
                    this.showCategoryManagementModal();
                }, 100);
            }
        });
    }

    showCategoryManagementModal() {
        // Generate categories HTML
        const incomeCategoriesHtml = this.data.categories.income.map(cat => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: var(--surface-color); border-radius: 8px; margin-bottom: 0.5rem;">
                <span>${cat}</span>
                <button type="button" class="btn-delete" onclick="app.deleteCategory('income', '${cat}')" style="padding: 0.25rem 0.5rem; font-size: 0.85rem;">🗑️</button>
            </div>
        `).join('');
        
        const expenseCategoriesHtml = this.data.categories.expense.map(cat => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: var(--surface-color); border-radius: 8px; margin-bottom: 0.5rem;">
                <span>${cat}</span>
                <button type="button" class="btn-delete" onclick="app.deleteCategory('expense', '${cat}')" style="padding: 0.25rem 0.5rem; font-size: 0.85rem;">🗑️</button>
            </div>
        `).join('');

        const content = `
            <div>
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="margin-bottom: 0.5rem;">หมวดหมู่รายรับ</h4>
                    <div id="incomeCategoriesList">
                        ${incomeCategoriesHtml || '<p style="color: var(--text-secondary);">ยังไม่มีหมวดหมู่</p>'}
                    </div>
                    <button type="button" class="btn-secondary" onclick="app.showAddCategoryModal('income')" style="width: 100%; margin-top: 0.5rem;">
                        + เพิ่มหมวดหมู่รายรับ
                    </button>
                </div>
                <div>
                    <h4 style="margin-bottom: 0.5rem;">หมวดหมู่รายจ่าย</h4>
                    <div id="expenseCategoriesList">
                        ${expenseCategoriesHtml || '<p style="color: var(--text-secondary);">ยังไม่มีหมวดหมู่</p>'}
                    </div>
                    <button type="button" class="btn-secondary" onclick="app.showAddCategoryModal('expense')" style="width: 100%; margin-top: 0.5rem;">
                        + เพิ่มหมวดหมู่รายจ่าย
                    </button>
                </div>
            </div>
        `;
        this.showModal('จัดการหมวดหมู่', content);
        this.updateTranslations();
    }

    deleteCategory(type, categoryName) {
        if (!confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบหมวดหมู่ "${categoryName}"?`)) {
            return;
        }
        
        // Check if category is used in transactions
        const hasTransactions = this.data.transactions.some(t => t.category === categoryName);
        if (hasTransactions) {
            this.showNotification('ไม่สามารถลบหมวดหมู่นี้ได้ เนื่องจากมีรายการที่ใช้หมวดหมู่นี้อยู่', 'error');
            return;
        }
        
        // Check if category is used in budgets
        const hasBudgets = this.data.budgets.some(b => b.category === categoryName);
        if (hasBudgets) {
            this.showNotification('ไม่สามารถลบหมวดหมู่นี้ได้ เนื่องจากมีงบประมาณที่ใช้หมวดหมู่นี้อยู่', 'error');
            return;
        }
        
        // Remove category
        this.data.categories[type] = this.data.categories[type].filter(cat => cat !== categoryName);
        this.saveData();
        this.showNotification('ลบหมวดหมู่สำเร็จ!');
        
        // Refresh category management modal
        setTimeout(() => {
            this.showCategoryManagementModal();
        }, 100);
    }

    showAccountsModal() {
        let accountsHtml = '';
        if (this.data.accounts.length === 0) {
            accountsHtml = '<div class="empty-state"><p>ยังไม่มีบัญชี</p></div>';
        } else {
            accountsHtml = this.data.accounts.map(acc => `
                <div class="account-card">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="display: flex; align-items: center; gap: 1rem; flex: 1;">
                            <div class="account-color-bar" style="background-color: ${acc.color}; width: 4px; height: 100%; border-radius: 2px; min-height: 60px;"></div>
                            <div style="flex: 1;">
                                <h3>${acc.name}</h3>
                                <p class="balance-amount" style="font-size: 1.5rem;">
                                    ฿${this.data.settings.hideBalance ? '••••' : acc.balance.toFixed(2)}
                                </p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background: ${acc.color}; cursor: pointer;" onclick="app.showEditAccountModal(${acc.id})" title="${this.t('edit')}"></div>
                            <button class="btn-delete" onclick="app.deleteAccount(${acc.id})" aria-label="${this.t('delete')}" title="${this.t('delete')}">
                                🗑️
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        const content = `
            <div>
                <div style="margin-bottom: 1rem;">
                    <button class="btn-secondary" onclick="app.showAddAccountModal()" style="width: 100%; margin-bottom: 1rem;">
                        + เพิ่มบัญชี
                    </button>
                </div>
                <div id="accountsListModal">${accountsHtml}</div>
                ${this.data.accounts.length >= 2 ? `
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
                ` : this.data.accounts.length === 1 ? `
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border-color);">
                    <p style="color: var(--text-secondary); text-align: center;">ต้องมีบัญชีอย่างน้อย 2 บัญชีเพื่อโอนเงิน</p>
                </div>
                ` : ''}
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
        // Redirect to statistics view instead of modal
        this.showView('statistics');
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

    showDailyExpenseModal() {
        const today = new Date().toISOString().split('T')[0];
        const todayTransactions = this.data.transactions.filter(t => 
            t.type === 'expense' && t.date === today
        );
        const todayExpense = todayTransactions.reduce((sum, t) => sum + t.amount, 0);
        const dailyLimit = this.data.settings.dailyExpenseLimit || 0;
        const percentage = dailyLimit > 0 ? (todayExpense / dailyLimit) * 100 : 0;
        const status = percentage >= 100 ? 'exceeded' : percentage >= 80 ? 'warning' : '';
        
        let content = '';
        
        if (dailyLimit === 0 || dailyLimit === null) {
            content = `
                <div>
                    <div class="empty-state" style="margin-bottom: 1.5rem;">
                        <p>${this.t('today_expense')}: ฿${todayExpense.toFixed(2)}</p>
                        <p style="margin-top: 0.5rem; color: var(--text-secondary);">${this.t('set_daily_limit')}</p>
                    </div>
                    <form id="dailyExpenseForm">
                        <div class="form-group">
                            <label for="dailyLimit" data-i18n="daily_expense_limit">งบค่าใช้จ่ายรายวัน (฿)</label>
                            <input type="number" id="dailyLimit" step="0.01" min="0" required placeholder="0.00">
                        </div>
                        <button type="submit" class="btn-primary" data-i18n="save">บันทึก</button>
                    </form>
                </div>
            `;
        } else {
            content = `
                <div>
                    <div class="budget-card" style="margin-bottom: 1.5rem;">
                        <h3>${this.t('today_expense')}</h3>
                        <div class="budget-usage">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span>${this.t('used')}: ฿${todayExpense.toFixed(2)}</span>
                                <span class="${status}" style="color: ${percentage >= 100 ? 'var(--danger-color)' : percentage >= 80 ? 'var(--warning-color)' : 'var(--text-color)'};">${this.t('from')} ฿${dailyLimit.toFixed(2)}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${Math.min(percentage, 100)}%; background: ${percentage >= 100 ? 'var(--danger-color)' : percentage >= 80 ? 'var(--warning-color)' : 'var(--primary-color)'};">
                                    ${percentage.toFixed(0)}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <form id="dailyExpenseForm">
                        <div class="form-group">
                            <label for="dailyLimit" data-i18n="daily_expense_limit">งบค่าใช้จ่ายรายวัน (฿)</label>
                            <input type="number" id="dailyLimit" step="0.01" min="0" value="${dailyLimit}" required>
                        </div>
                        <button type="submit" class="btn-primary" data-i18n="save">บันทึก</button>
                    </form>
                </div>
            `;
        }
        
        this.showModal(this.t('daily_expense'), content);
        this.updateTranslations();
        
        document.getElementById('dailyExpenseForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const limit = parseFloat(document.getElementById('dailyLimit').value);
            if (limit >= 0) {
                this.data.settings.dailyExpenseLimit = limit;
                this.saveData();
                this.closeModal();
                this.showNotification('ตั้งงบค่าใช้จ่ายรายวันสำเร็จ!');
                this.updateUI();
            }
        });
    }

    showSavingsGoalModal() {
        const activeGoal = this.data.goals.find(g => {
            const endDate = new Date(g.endDate);
            return endDate > new Date();
        });

        if (activeGoal) {
            // Show existing goal with option to edit
            const account = this.data.accounts.find(a => a.id === activeGoal.accountId);
            const progress = account ? (account.balance / activeGoal.target) * 100 : 0;
            const daysLeft = Math.ceil((new Date(activeGoal.endDate) - new Date()) / (1000 * 60 * 60 * 24));
            const streak = this.calculateStreak(activeGoal);

            const content = `
                <div>
                    <div class="goal-card" style="margin-bottom: 1.5rem;">
                        <h3>${activeGoal.name}</h3>
                        <p>บัญชี: ${account ? account.name : 'ไม่พบ'}</p>
                        <p>เป้าหมาย: ฿${activeGoal.target.toFixed(2)}</p>
                        <p>วันสิ้นสุด: ${this.formatDate(activeGoal.endDate)} (${daysLeft} วัน)</p>
                        <p>Streak: 🔥 ${streak} วันติดต่อกัน</p>
                        <div class="goal-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${Math.min(progress, 100)}%">
                                    ${progress.toFixed(0)}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-secondary" onclick="app.showEditSavingsGoalModal(${activeGoal.id})" style="width: 100%; margin-bottom: 1rem;">
                        แก้ไขเป้าหมาย
                    </button>
                    <button class="btn-secondary" onclick="app.deleteSavingsGoal(${activeGoal.id})" style="width: 100%; background: var(--danger-color); color: white;">
                        ลบเป้าหมาย
                    </button>
                </div>
            `;
            this.showModal('เป้าหมายการออม', content);
            return;
        }

        // No active goal, show form to create one
        this.showAddSavingsGoalModal();
    }

    showAddSavingsGoalModal() {
        if (this.data.accounts.length === 0) {
            this.showNotification('กรุณาสร้างบัญชีก่อนตั้งเป้าหมาย', 'error');
            return;
        }

        const content = `
            <form id="addSavingsGoalForm">
                <div class="form-group">
                    <label>ชื่อเป้าหมาย</label>
                    <input type="text" id="savingsGoalName" required placeholder="เช่น ออมเงินซื้อรถ">
                </div>
                <div class="form-group">
                    <label>เลือกบัญชีสำหรับออม</label>
                    <select id="savingsGoalAccount" required>
                        ${this.data.accounts.map(acc => 
                            `<option value="${acc.id}">${acc.name} (ยอดปัจจุบัน: ฿${acc.balance.toFixed(2)})</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>จำนวนเป้าหมาย (฿)</label>
                    <input type="number" id="savingsGoalTarget" step="0.01" min="0" required placeholder="0.00">
                </div>
                <div class="form-group">
                    <label>วันสิ้นสุด</label>
                    <input type="date" id="savingsGoalEndDate" required>
                </div>
                <div style="background: var(--surface-color); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.5rem;">
                        💡 <strong>เคล็ดลับ:</strong> เพื่อรักษา Streak คุณต้องโอนเงินเข้าบัญชีนี้อย่างน้อยวันละ 1 บาท
                    </p>
                    <p style="color: var(--text-secondary); font-size: 0.85rem;">
                        ใช้ฟีเจอร์ "โอนเงินระหว่างบัญชี" เพื่อโอนเงินเข้าบัญชีเป้าหมาย
                    </p>
                </div>
                <button type="submit" class="btn-primary">ตั้งเป้าหมาย</button>
            </form>
        `;
        this.showModal('ตั้งเป้าหมายการออม', content);
        
        const endDateInput = document.getElementById('savingsGoalEndDate');
        const nextMonth = new Date();
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        endDateInput.value = nextMonth.toISOString().split('T')[0];
        
        document.getElementById('addSavingsGoalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('savingsGoalName').value;
            const target = parseFloat(document.getElementById('savingsGoalTarget').value);
            const endDate = document.getElementById('savingsGoalEndDate').value;
            const accountId = parseInt(document.getElementById('savingsGoalAccount').value);
            
            // Remove any existing active goals
            this.data.goals = this.data.goals.filter(g => {
                const gEndDate = new Date(g.endDate);
                return gEndDate <= new Date();
            });
            
            this.data.goals.push({
                id: Date.now(),
                name: name,
                target: target,
                endDate: endDate,
                accountId: accountId,
                lastTransferDate: null,
                streak: 0
            });
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('ตั้งเป้าหมายสำเร็จ! เริ่มโอนเงินเข้าบัญชีเพื่อรักษา Streak');
        });
    }

    showEditSavingsGoalModal(goalId) {
        const goal = this.data.goals.find(g => g.id === goalId);
        if (!goal) return;

        const content = `
            <form id="editSavingsGoalForm">
                <div class="form-group">
                    <label>ชื่อเป้าหมาย</label>
                    <input type="text" id="editSavingsGoalName" value="${goal.name}" required>
                </div>
                <div class="form-group">
                    <label>เลือกบัญชีสำหรับออม</label>
                    <select id="editSavingsGoalAccount" required>
                        ${this.data.accounts.map(acc => 
                            `<option value="${acc.id}" ${acc.id === goal.accountId ? 'selected' : ''}>${acc.name} (ยอดปัจจุบัน: ฿${acc.balance.toFixed(2)})</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>จำนวนเป้าหมาย (฿)</label>
                    <input type="number" id="editSavingsGoalTarget" step="0.01" min="0" value="${goal.target}" required>
                </div>
                <div class="form-group">
                    <label>วันสิ้นสุด</label>
                    <input type="date" id="editSavingsGoalEndDate" value="${goal.endDate}" required>
                </div>
                <button type="submit" class="btn-primary">บันทึกการแก้ไข</button>
            </form>
        `;
        this.showModal('แก้ไขเป้าหมายการออม', content);
        
        document.getElementById('editSavingsGoalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            goal.name = document.getElementById('editSavingsGoalName').value;
            goal.target = parseFloat(document.getElementById('editSavingsGoalTarget').value);
            goal.endDate = document.getElementById('editSavingsGoalEndDate').value;
            goal.accountId = parseInt(document.getElementById('editSavingsGoalAccount').value);
            
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('แก้ไขเป้าหมายสำเร็จ!');
        });
    }

    deleteSavingsGoal(goalId) {
        if (!confirm('คุณแน่ใจหรือไม่ว่าต้องการลบเป้าหมายนี้?')) {
            return;
        }
        this.data.goals = this.data.goals.filter(g => g.id !== goalId);
        this.saveData();
        this.updateUI();
        this.closeModal();
        this.showNotification('ลบเป้าหมายสำเร็จ!');
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
                const isReturned = lend.isReturned || false;
                const status = isReturned ? 'returned' :
                              lend.paid >= lend.amount ? 'completed' : 
                              daysLeft < 0 ? 'overdue' : 'pending';
                const account = lend.accountId ? this.data.accounts.find(a => a.id === lend.accountId) : null;
                const accountName = account ? account.name : 'ไม่ระบุบัญชี';
                const typeClass = lend.type === 'borrow' ? 'borrow' : 'lend';
                const returnedClass = isReturned ? 'returned' : '';
                
                return `
                    <div class="lending-item ${typeClass} ${returnedClass}">
                        <h3>${lend.personName}</h3>
                        <p><strong>${lend.type === 'borrow' ? 'ยืม' : 'ให้ยืม'}:</strong> ฿${lend.amount.toFixed(2)}</p>
                        <p>บัญชี: ${accountName}</p>
                        <p>ชำระแล้ว: ฿${lend.paid.toFixed(2)}</p>
                        <p>ครบกำหนด: ${this.formatDate(lend.dueDate)} (${daysLeft} วัน)</p>
                        <span class="lending-status ${status}">
                            ${status === 'returned' ? '✓ คืนแล้ว' :
                              status === 'completed' ? 'ชำระครบ' : 
                              status === 'overdue' ? 'เกินกำหนด' : 'รอชำระ'}
                        </span>
                        ${!isReturned ? `<button class="btn-return" onclick="app.markLendingAsReturned(${lend.id})">✓ ทำเครื่องหมายว่าคืนแล้ว</button>` : ''}
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
        const selectedColor = this.defaultColors[0];
        const fixedColors = this.defaultColors.slice(0, 9); // First 9 fixed colors
        const colorOptions = fixedColors.map((color, index) => `
            <button type="button" class="color-option ${index === 0 ? 'selected' : ''}" 
                    data-color="${color}" 
                    style="background-color: ${color};"
                    onclick="app.selectAccountColor('${color}')">
                ${index === 0 ? '✓' : ''}
            </button>
        `).join('');

        const content = `
            <form id="addAccountForm">
                <div class="form-group">
                    <label data-i18n="account_name">ชื่อบัญชี</label>
                    <input type="text" id="accountName" required>
                </div>
                <div class="form-group">
                    <label>เลือกสี</label>
                    <div class="color-picker-grid">
                        ${colorOptions}
                        <div class="color-picker-custom-wrapper" style="background-color: ${selectedColor};">
                            <input type="color" id="customColorPicker" value="${selectedColor}" 
                                   onchange="app.selectCustomColor(this.value)" 
                                   style="width: 100%; height: 100%; border: none; border-radius: 8px; cursor: pointer; opacity: 0; position: absolute; top: 0; left: 0;">
                            <div class="color-picker-label">🎨</div>
                        </div>
                    </div>
                    <input type="hidden" id="accountColor" value="${selectedColor}">
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

    selectAccountColor(color) {
        // Update hidden input (support both add and edit forms)
        const colorInput = document.getElementById('accountColor') || document.getElementById('editAccountColor');
        if (colorInput) {
            colorInput.value = color;
        }
        
        // Update custom color picker if exists
        const customPicker = document.getElementById('customColorPicker') || document.getElementById('editCustomColorPicker');
        if (customPicker) {
            customPicker.value = color;
        }
        
        // Update visual selection
        document.querySelectorAll('.color-option').forEach(btn => {
            btn.classList.remove('selected');
            btn.textContent = '';
        });
        
        // Remove selected from custom color picker wrapper
        document.querySelectorAll('.color-picker-custom-wrapper').forEach(wrapper => {
            wrapper.classList.remove('selected');
            wrapper.style.backgroundColor = color; // Update background to match selected color
            const label = wrapper.querySelector('.color-picker-label');
            if (label) label.textContent = '🎨';
        });
        
        const selectedBtn = document.querySelector(`[data-color="${color}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
            selectedBtn.textContent = '✓';
        }
    }

    selectCustomColor(color) {
        // Update hidden input (support both add and edit forms)
        const colorInput = document.getElementById('accountColor') || document.getElementById('editAccountColor');
        if (colorInput) {
            colorInput.value = color;
        }
        
        // Update visual selection - remove selected from fixed colors
        document.querySelectorAll('.color-option').forEach(btn => {
            btn.classList.remove('selected');
            btn.textContent = '';
        });
        
        // Mark custom color picker as selected and update background color
        document.querySelectorAll('.color-picker-custom-wrapper').forEach(wrapper => {
            wrapper.classList.add('selected');
            wrapper.style.backgroundColor = color;
            const label = wrapper.querySelector('.color-picker-label');
            if (label) label.textContent = '✓';
        });
    }

    showEditAccountModal(accountId) {
        const account = this.data.accounts.find(a => a.id === accountId);
        if (!account) return;

        const selectedColor = account.color;
        const fixedColors = this.defaultColors.slice(0, 9); // First 9 fixed colors
        const isCustomColor = !fixedColors.includes(account.color);
        
        const colorOptions = fixedColors.map((color) => `
            <button type="button" class="color-option ${color === selectedColor ? 'selected' : ''}" 
                    data-color="${color}" 
                    style="background-color: ${color};"
                    onclick="app.selectAccountColor('${color}')">
                ${color === selectedColor ? '✓' : ''}
            </button>
        `).join('');

        const content = `
            <form id="editAccountForm">
                <div class="form-group">
                    <label data-i18n="account_name">ชื่อบัญชี</label>
                    <input type="text" id="editAccountName" value="${account.name}" required>
                </div>
                <div class="form-group">
                    <label>เลือกสี</label>
                    <div class="color-picker-grid">
                        ${colorOptions}
                        <div class="color-picker-custom-wrapper ${isCustomColor ? 'selected' : ''}" style="background-color: ${selectedColor};">
                            <input type="color" id="editCustomColorPicker" value="${selectedColor}" 
                                   onchange="app.selectCustomColor(this.value)" 
                                   style="width: 100%; height: 100%; border: none; border-radius: 8px; cursor: pointer; opacity: 0; position: absolute; top: 0; left: 0;">
                            <div class="color-picker-label">${isCustomColor ? '✓' : '🎨'}</div>
                        </div>
                    </div>
                    <input type="hidden" id="editAccountColor" value="${selectedColor}">
                </div>
                <button type="submit" class="btn-primary" data-i18n="save">บันทึก</button>
            </form>
        `;
        this.showModal(this.t('edit_account'), content);
        this.updateTranslations();
        
        document.getElementById('editAccountForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('editAccountName').value.trim();
            const color = document.getElementById('editAccountColor').value;
            
            if (!name) {
                this.showNotification('กรุณากรอกชื่อบัญชี', 'error');
                return;
            }
            
            // Update account
            account.name = name;
            account.color = color;
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('แก้ไขบัญชีสำเร็จ!');
            
            // Refresh accounts modal if it's open
            const accountsModal = document.getElementById('modalOverlay');
            if (accountsModal && accountsModal.classList.contains('active')) {
                setTimeout(() => {
                    this.showAccountsModal();
                }, 100);
            }
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
        if (this.data.accounts.length === 0) {
            this.showNotification('กรุณาสร้างบัญชีก่อนเพิ่มรายการยืม/ให้ยืม', 'error');
            return;
        }

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
                    <label data-i18n="accounts">บัญชี</label>
                    <select id="lendAccount" required>
                        ${this.data.accounts.map(acc => 
                            `<option value="${acc.id}">${acc.name} (ยอดปัจจุบัน: ฿${acc.balance.toFixed(2)})</option>`
                        ).join('')}
                    </select>
                    <small style="color: var(--text-secondary); display: block; margin-top: 0.5rem;">
                        <span id="lendAccountHint">เมื่อยืม: เงินจะเข้าบัญชีนี้ | เมื่อให้ยืม: เงินจะออกจากบัญชีนี้</span>
                    </small>
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

        // Update hint text when type changes
        const lendTypeInputs = document.querySelectorAll('input[name="lendType"]');
        const accountHint = document.getElementById('lendAccountHint');
        lendTypeInputs.forEach(input => {
            input.addEventListener('change', () => {
                const type = document.querySelector('input[name="lendType"]:checked').value;
                if (type === 'borrow') {
                    accountHint.textContent = 'เมื่อยืม: เงินจะเข้าบัญชีนี้';
                } else {
                    accountHint.textContent = 'เมื่อให้ยืม: เงินจะออกจากบัญชีนี้';
                }
            });
        });
        
        document.getElementById('addLendingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const type = document.querySelector('input[name="lendType"]:checked').value;
            const person = document.getElementById('lendPerson').value;
            const accountId = parseInt(document.getElementById('lendAccount').value);
            const amount = parseFloat(document.getElementById('lendAmount').value);
            const dueDate = document.getElementById('lendDueDate').value;
            
            const account = this.data.accounts.find(a => a.id === accountId);
            if (!account) {
                this.showNotification('ไม่พบบัญชี', 'error');
                return;
            }

            // Update account balance based on type
            if (type === 'borrow') {
                // ยืม: เงินเข้าบัญชี
                account.balance += amount;
            } else {
                // ให้ยืม: เงินออกจากบัญชี
                if (account.balance < amount) {
                    this.showNotification('ยอดเงินในบัญชีไม่พอ', 'error');
                    return;
                }
                account.balance -= amount;
            }

            // Create transaction record
            const transaction = {
                id: Date.now(),
                type: type === 'borrow' ? 'income' : 'expense',
                amount: amount,
                accountId: accountId,
                category: type === 'borrow' ? 'ยืม' : 'ให้ยืม',
                date: new Date().toISOString().split('T')[0],
                note: `${type === 'borrow' ? 'ยืม' : 'ให้ยืม'} ${person}`,
                timestamp: new Date().toISOString()
            };
            this.data.transactions.push(transaction);
            
            // Add lending record
            this.data.lending.push({
                id: Date.now(),
                type: type,
                personName: person,
                accountId: accountId,
                amount: amount,
                paid: 0,
                dueDate: dueDate,
                isReturned: false
            });
            
            this.saveData();
            this.updateUI();
            this.closeModal();
            this.showNotification('บันทึกรายการสำเร็จ!');
        });
    }

    markLendingAsReturned(lendingId) {
        const lending = this.data.lending.find(l => l.id === lendingId);
        if (!lending) {
            this.showNotification('ไม่พบรายการ', 'error');
            return;
        }

        if (lending.isReturned) {
            this.showNotification('รายการนี้ถูกทำเครื่องหมายว่าคืนแล้ว', 'error');
            return;
        }

        // Mark as returned
        lending.isReturned = true;

        // Update account balance based on type
        const account = this.data.accounts.find(a => a.id === lending.accountId);
        if (account) {
            if (lending.type === 'borrow') {
                // ยืม: เมื่อคืนแล้ว เงินออกจากบัญชี (เพราะตอนยืมเงินเข้า)
                account.balance -= lending.amount;
            } else {
                // ให้ยืม: เมื่อคืนแล้ว เงินเข้าบัญชี (เพราะตอนให้ยืมเงินออก)
                account.balance += lending.amount;
            }

            // Create transaction record for return
            const transaction = {
                id: Date.now(),
                type: lending.type === 'borrow' ? 'expense' : 'income',
                amount: lending.amount,
                accountId: lending.accountId,
                category: lending.type === 'borrow' ? 'คืนเงินยืม' : 'รับเงินคืน',
                date: new Date().toISOString().split('T')[0],
                note: `คืน${lending.type === 'borrow' ? 'เงินยืม' : 'เงินให้ยืม'} ${lending.personName}`,
                timestamp: new Date().toISOString()
            };
            this.data.transactions.push(transaction);
        }

        this.saveData();
        this.updateUI();
        
        // If modal is open, refresh it
        const modal = document.getElementById('modalOverlay');
        if (modal && modal.classList.contains('active')) {
            this.showLendingModal();
        }
        
        this.showNotification('ทำเครื่องหมายว่าคืนแล้วสำเร็จ!');
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
        // Remove existing notifications
        document.querySelectorAll('.notification-toast').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = 'notification-toast';
        
        const icon = type === 'error' ? '❌' : '✅';
        const bgColor = type === 'error' ? 'var(--danger-color)' : 'var(--success-color)';
        
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icon}</span>
                <span class="notification-message">${message}</span>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 1rem 1.25rem;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1);
            z-index: 10000;
            min-width: 280px;
            max-width: 400px;
            animation: notificationSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(10px);
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'notificationSlideOut 0.3s cubic-bezier(0.4, 0, 1, 1)';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
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

// Add CSS animations and styles for notifications
const style = document.createElement('style');
style.textContent = `
    .notification-toast {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-icon {
        font-size: 1.25rem;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }
    
    .notification-message {
        flex: 1;
        line-height: 1.5;
        font-size: 0.95rem;
    }
    
    @keyframes notificationSlideIn {
        from {
            transform: translateX(calc(100% + 20px));
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes notificationSlideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(calc(100% + 20px));
            opacity: 0;
        }
    }
    
    @media (max-width: 768px) {
        .notification-toast {
            bottom: 10px !important;
            right: 10px !important;
            left: 10px !important;
            min-width: auto !important;
            max-width: none !important;
        }
        
        @keyframes notificationSlideIn {
            from {
                transform: translateY(100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes notificationSlideOut {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    }
`;
document.head.appendChild(style);

