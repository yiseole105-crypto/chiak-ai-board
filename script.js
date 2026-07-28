// script.js

const CATEGORY_LABELS = {
  exam: "시험·평가",
  school: "학교 행사",
  club: "동아리",
  meeting: "회의·상담",
  holiday: "방학·공휴일",
  assignment: "수행·과제"
};

const academicEvents = [
  schedule("2026-03-01", "삼일절", "holiday"),
  schedule("2026-03-02", "대체공휴일", "holiday"),
  schedule("2026-03-03", "입학식", "school"),
  schedule("2026-03-06", "동아리 활동", "club"),
  schedule(
    "2026-03-09",
    "진로상담 기간",
    "meeting",
    "2026-03-27"
  ),
  schedule("2026-03-13", "어울림 회의", "meeting"),
  schedule(
    "2026-03-18",
    "학부모 총회(학교 설명회)",
    "school"
  ),
  schedule("2026-03-20", "동아리 활동", "club"),
  schedule(
    "2026-03-24",
    "전국연합학력평가",
    "exam"
  ),
  schedule(
    "2026-03-26",
    "1학년 대표 선거",
    "school"
  ),
  schedule("2026-03-27", "동아리 활동", "club"),

  schedule("2026-04-03", "어울림 회의", "meeting"),
  schedule("2026-04-10", "동아리 활동", "club"),
  schedule("2026-04-15", "개교기념일", "school"),
  schedule(
    "2026-04-20",
    "1회고사",
    "exam",
    "2026-04-24"
  ),

  schedule("2026-05-01", "재량휴업일", "holiday"),
  schedule("2026-05-04", "재량휴업일", "holiday"),
  schedule("2026-05-05", "어린이날", "holiday"),
  schedule(
    "2026-05-06",
    "교육실습",
    "school",
    "2026-06-04"
  ),
  schedule(
    "2026-05-07",
    "3학년 전국연합학력평가",
    "exam"
  ),
  schedule("2026-05-08", "동아리 활동", "club"),
  schedule(
    "2026-05-13",
    "교육과정 박람회",
    "school"
  ),
  schedule("2026-05-15", "스승의 날", "school"),
  schedule(
    "2026-05-18",
    "1차 과목선택",
    "school",
    "2026-05-22"
  ),
  schedule(
    "2026-05-22",
    "연합체육대회(1학년)",
    "school"
  ),
  schedule("2026-05-24", "부처님오신날", "holiday"),
  schedule("2026-05-25", "대체공휴일", "holiday"),
  schedule("2026-05-28", "체육한마당", "school"),
  schedule("2026-05-29", "동아리 활동", "club"),

  schedule("2026-06-03", "지방선거", "holiday"),
  schedule(
    "2026-06-04",
    "3학년 수능모의평가",
    "exam"
  ),
  schedule(
    "2026-06-04",
    "1·2학년 전국연합평가",
    "exam"
  ),
  schedule("2026-06-05", "동아리 활동", "club"),
  schedule("2026-06-06", "현충일", "holiday"),
  schedule("2026-06-12", "어울림 회의", "meeting"),
  schedule("2026-06-19", "동아리 활동", "club"),
  schedule(
    "2026-06-22",
    "2회고사",
    "exam",
    "2026-06-26"
  ),
  schedule(
    "2026-06-29",
    "2차 과목선택",
    "school",
    "2026-07-03"
  ),

  schedule("2026-07-03", "동아리 활동", "club"),
  schedule(
    "2026-07-08",
    "3학년 전국연합학력평가",
    "exam"
  ),
  schedule(
    "2026-07-10",
    "교육과정 평가회",
    "school"
  ),
  schedule("2026-07-15", "학술제", "school"),
  schedule("2026-07-17", "제헌절", "holiday"),
  schedule("2026-07-21", "방학식", "school"),
  schedule(
    "2026-07-22",
    "여름방학",
    "holiday",
    "2026-08-09"
  ),

  schedule("2026-08-10", "개학일", "school"),
  schedule("2026-08-14", "어울림 회의", "meeting"),
  schedule("2026-08-15", "광복절", "holiday"),
  schedule("2026-08-17", "대체공휴일", "holiday"),
  schedule(
    "2026-08-18",
    "진로상담 기간",
    "meeting",
    "2026-08-28"
  ),
  schedule("2026-08-21", "동아리 활동", "club"),
  schedule("2026-08-28", "어울림 회의", "meeting"),

  schedule(
    "2026-09-02",
    "3학년 수능모의평가",
    "exam"
  ),
  schedule(
    "2026-09-02",
    "1·2학년 연합학력평가",
    "exam"
  ),
  schedule("2026-09-04", "동아리 활동", "club"),
  schedule("2026-09-11", "어울림 회의", "meeting"),
  schedule("2026-09-18", "동아리 활동", "club"),
  schedule("2026-09-24", "추석연휴", "holiday"),
  schedule("2026-09-25", "추석", "holiday"),
  schedule("2026-09-26", "추석연휴", "holiday"),
  schedule(
    "2026-09-28",
    "1회고사",
    "exam",
    "2026-10-02"
  ),

  schedule(
    "2026-10-02",
    "최종 과목선택",
    "school",
    "2026-10-08"
  ),
  schedule("2026-10-03", "개천절", "holiday"),
  schedule("2026-10-05", "대체공휴일", "holiday"),
  schedule("2026-10-09", "한글날", "holiday"),
  schedule(
    "2026-10-13",
    "2학년 체험학습",
    "school",
    "2026-10-16"
  ),
  schedule(
    "2026-10-14",
    "1학년 체험학습",
    "school"
  ),
  schedule(
    "2026-10-20",
    "전국연합학력평가",
    "exam"
  ),
  schedule("2026-10-23", "어울림 회의", "meeting"),
  schedule("2026-10-30", "동아리 활동", "club"),

  schedule("2026-11-06", "어울림 회의", "meeting"),
  schedule("2026-11-13", "동아리 활동", "club"),
  schedule(
    "2026-11-19",
    "대학수학능력시험(재량휴업일)",
    "exam"
  ),
  schedule("2026-11-20", "동아리 활동", "club"),
  schedule(
    "2026-11-23",
    "3학년 2회고사",
    "exam",
    "2026-11-26"
  ),
  schedule(
    "2026-11-30",
    "1·2학년 2회고사",
    "exam",
    "2026-12-04"
  ),

  schedule("2026-12-11", "졸업평가회", "school"),
  schedule("2026-12-11", "동아리 활동", "club"),
  schedule(
    "2026-12-14",
    "자율교육과정 운영",
    "school",
    "2026-12-18"
  ),
  schedule(
    "2026-12-16",
    "학생자치회 선거",
    "school"
  ),
  schedule(
    "2026-12-18",
    "교육과정 평가회",
    "school"
  ),
  schedule(
    "2026-12-21",
    "1학년 진급평가회",
    "school"
  ),
  schedule(
    "2026-12-22",
    "2학년 진급평가회",
    "school"
  ),
  schedule(
    "2026-12-23",
    "보은제",
    "school",
    "2026-12-24"
  ),
  schedule("2026-12-25", "성탄절", "holiday"),
  schedule(
    "2026-12-29",
    "졸업식·종업식",
    "school"
  ),
  schedule(
    "2026-12-30",
    "겨울방학",
    "holiday",
    "2027-01-31"
  ),
  schedule("2027-01-01", "신정", "holiday")
];

const elements = {
  heroMonth: document.querySelector("#heroMonth"),
  heroYear: document.querySelector("#heroYear"),
  calendarYear: document.querySelector("#calendarYear"),
  calendarMonth: document.querySelector("#calendarMonth"),
  calendarWeeks: document.querySelector("#calendarWeeks"),

  addModal: document.querySelector("#addModal"),
  detailModal: document.querySelector("#detailModal"),

  addEventForm: document.querySelector("#addEventForm"),
  eventTitleInput: document.querySelector("#eventTitleInput"),
  eventStartInput: document.querySelector("#eventStartInput"),
  eventEndInput: document.querySelector("#eventEndInput"),
  eventCategoryInput: document.querySelector("#eventCategoryInput"),
  eventDescriptionInput: document.querySelector(
    "#eventDescriptionInput"
  ),

  detailTitle: document.querySelector("#detailTitle"),
  detailBody: document.querySelector("#detailBody"),

  selectedDday: document.querySelector("#selectedDday"),
  clearDday: document.querySelector("#clearDday"),
  upcomingList: document.querySelector("#upcomingList"),

  chatLog: document.querySelector("#chatLog"),
  assistantForm: document.querySelector("#assistantForm"),
  assistantInput: document.querySelector("#assistantInput"),

  memoInput: document.querySelector("#memoInput"),
  memoSavedAt: document.querySelector("#memoSavedAt"),
  memoCount: document.querySelector("#memoCount"),

  toast: document.querySelector("#toast")
};

let shownMonth = startOfMonth(new Date());
let customEvents = loadCustomEvents();

let selectedDdayId =
  localStorage.getItem("chiak-selected-dday") || "";

let toastTimer = null;
let memoTimer = null;

initialize();

function initialize() {
  applySavedTheme();
  loadMemo();
  bindEvents();
  renderAll();
}

function bindEvents() {
  document
    .querySelector("#prevMonth")
    .addEventListener("click", () => {
      shownMonth = new Date(
        shownMonth.getFullYear(),
        shownMonth.getMonth() - 1,
        1
      );

      renderCalendar();
    });

  document
    .querySelector("#nextMonth")
    .addEventListener("click", () => {
      shownMonth = new Date(
        shownMonth.getFullYear(),
        shownMonth.getMonth() + 1,
        1
      );

      renderCalendar();
    });

  document
    .querySelector("#goToday")
    .addEventListener("click", () => {
      shownMonth = startOfMonth(new Date());
      renderCalendar();
    });

  document
    .querySelector("#openAddEvent")
    .addEventListener("click", () => {
      openAddModal(formatDateKey(new Date()));
    });

  document
    .querySelectorAll(".theme-tab[data-theme]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        setTheme(button.dataset.theme);
      });
    });

  elements.eventStartInput.addEventListener(
    "change",
    () => {
      const start = elements.eventStartInput.value;
      const end = elements.eventEndInput.value;

      if (!end || end < start) {
        elements.eventEndInput.value = start;
      }
    }
  );

  elements.addEventForm.addEventListener(
    "submit",
    addCustomEvent
  );

  document
    .querySelectorAll("[data-close-add]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        closeModal(elements.addModal);
      });
    });

  document
    .querySelectorAll("[data-close-detail]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        closeModal(elements.detailModal);
      });
    });

  elements.clearDday.addEventListener(
    "click",
    () => {
      selectedDdayId = "";

      localStorage.removeItem(
        "chiak-selected-dday"
      );

      renderDday();

      showToast(
        "선택한 D-DAY가 해제되었습니다."
      );
    }
  );

  elements.assistantForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const question =
        elements.assistantInput.value.trim();

      if (!question) {
        return;
      }

      askAssistant(question);

      elements.assistantInput.value = "";
    }
  );

  document
    .querySelectorAll("[data-question]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        askAssistant(button.dataset.question);
      });
    });

  elements.memoInput.addEventListener(
    "input",
    () => {
      updateMemoCount();

      clearTimeout(memoTimer);

      elements.memoSavedAt.textContent =
        "저장 중...";

      memoTimer = setTimeout(
        saveMemo,
        350
      );
    }
  );

  document
    .querySelector("#clearMemo")
    .addEventListener("click", () => {
      elements.memoInput.value = "";

      saveMemo();

      showToast("메모를 지웠습니다.");
    });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeModal(elements.addModal);
        closeModal(elements.detailModal);
      }
    }
  );
}

function renderAll() {
  renderCalendar();
  renderDday();
  renderUpcoming();
}

function renderCalendar() {
  const year = shownMonth.getFullYear();
  const month = shownMonth.getMonth();

  const gridStart = startOfWeekSunday(
    new Date(year, month, 1)
  );

  const todayKey = formatDateKey(
    new Date()
  );

  elements.heroMonth.textContent =
    String(month + 1).padStart(2, "0");

  elements.heroYear.textContent = year;
  elements.calendarYear.textContent = year;

  elements.calendarMonth.textContent =
    String(month + 1).padStart(2, "0");

  elements.calendarWeeks.innerHTML = "";

  for (
    let weekIndex = 0;
    weekIndex < 6;
    weekIndex += 1
  ) {
    const weekStart = addDays(
      gridStart,
      weekIndex * 7
    );

    const weekEnd = addDays(
      weekStart,
      6
    );

    const weekRow =
      document.createElement("section");

    weekRow.className = "week-row";

    const weekGrid =
      document.createElement("div");

    weekGrid.className = "week-grid";

    const dayCells = [];

    for (
      let dayIndex = 0;
      dayIndex < 7;
      dayIndex += 1
    ) {
      const date = addDays(
        weekStart,
        dayIndex
      );

      const dateKey =
        formatDateKey(date);

      const dayCell =
        document.createElement("button");

      dayCell.type = "button";
      dayCell.className = "day-cell";

      dayCell.innerHTML = `
        <span class="day-number">
          ${date.getDate()}
        </span>
      `;

      if (date.getMonth() !== month) {
        dayCell.classList.add(
          "other-month"
        );
      }

      if (dateKey === todayKey) {
        dayCell.classList.add("today");
      }

      dayCell.addEventListener(
        "click",
        () => {
          openAddModal(dateKey);
        }
      );

      weekGrid.appendChild(dayCell);
      dayCells.push(dayCell);
    }

    const eventLayer =
      document.createElement("div");

    eventLayer.className = "event-layer";

    renderWeekEvents(
      weekStart,
      weekEnd,
      eventLayer,
      dayCells
    );

    weekRow.appendChild(weekGrid);
    weekRow.appendChild(eventLayer);

    elements.calendarWeeks.appendChild(
      weekRow
    );
  }
}

function renderWeekEvents(
  weekStart,
  weekEnd,
  eventLayer,
  dayCells
) {
  const weekEvents = getAllEvents()
    .filter((item) => {
      return intersects(
        item,
        weekStart,
        weekEnd
      );
    })
    .sort((first, second) => {
      const startDifference =
        parseDate(first.start) -
        parseDate(second.start);

      if (startDifference !== 0) {
        return startDifference;
      }

      return (
        eventLength(second) -
        eventLength(first)
      );
    });

  const laneEndColumns = [
    -1,
    -1,
    -1,
    -1
  ];

  const overflowByDay =
    Array(7).fill(0);

  weekEvents.forEach((item) => {
    const itemStart =
      parseDate(item.start);

    const itemEnd =
      parseDate(
        item.end || item.start
      );

    const segmentStart =
      itemStart < weekStart
        ? weekStart
        : itemStart;

    const segmentEnd =
      itemEnd > weekEnd
        ? weekEnd
        : itemEnd;

    const startColumn =
      daysBetween(
        weekStart,
        segmentStart
      );

    const endColumn =
      daysBetween(
        weekStart,
        segmentEnd
      );

    const lane =
      laneEndColumns.findIndex(
        (lastColumn) => {
          return startColumn > lastColumn;
        }
      );

    if (lane === -1) {
      for (
        let column = startColumn;
        column <= endColumn;
        column += 1
      ) {
        overflowByDay[column] += 1;
      }

      return;
    }

    laneEndColumns[lane] = endColumn;

    const eventButton =
      document.createElement("button");

    eventButton.type = "button";
    eventButton.className = "event-bar";

    eventButton.dataset.category =
      item.category;

    eventButton.style.gridColumn =
      `${startColumn + 1} / ${endColumn + 2}`;

    eventButton.style.gridRow =
      String(lane + 1);

    eventButton.textContent =
      item.title;

    eventButton.title =
      `${item.title} · ${formatEventDate(item)}`;

    if (itemStart < weekStart) {
      eventButton.classList.add(
        "continues-left"
      );
    }

    if (itemEnd > weekEnd) {
      eventButton.classList.add(
        "continues-right"
      );
    }

    eventButton.addEventListener(
      "click",
      (event) => {
        event.stopPropagation();
        showDetail(item);
      }
    );

    eventLayer.appendChild(eventButton);
  });

  overflowByDay.forEach(
    (count, index) => {
      if (count === 0) {
        return;
      }

      const more =
        document.createElement("span");

      more.className = "overflow-count";
      more.textContent = `+${count}`;

      dayCells[index].appendChild(more);
    }
  );
}

function renderDday() {
  const manualEvent =
    getAllEvents().find((item) => {
      return item.id === selectedDdayId;
    });

  const target =
    manualEvent ||
    getAutomaticDdayEvent();

  elements.clearDday.style.visibility =
    manualEvent ? "visible" : "hidden";

  if (!target) {
    elements.selectedDday.innerHTML = `
      <div class="dday-empty">
        표시할 일정이 없습니다.<br />
        캘린더 일정을 눌러 D-DAY로 설정하세요.
      </div>
    `;

    return;
  }

  const today = stripTime(new Date());

  const difference =
    daysBetween(
      today,
      parseDate(target.start)
    );

  const label =
    formatDday(difference);

  elements.selectedDday.innerHTML = `
    <div class="dday-main">
      <small>
        ${
          manualEvent
            ? "SELECTED SCHEDULE"
            : "NEAREST SCHEDULE"
        }
      </small>

      <strong>${label}</strong>

      <p>
        ${escapeHtml(target.title)}
      </p>

      <span>
        ${formatEventDate(target)}
      </span>
    </div>
  `;

  elements.selectedDday
    .querySelector(".dday-main")
    .addEventListener("click", () => {
      showDetail(target);
    });
}

function getAutomaticDdayEvent() {
  const today = stripTime(new Date());

  return (
    getAllEvents()
      .filter((item) => {
        return (
          parseDate(
            item.end || item.start
          ) >= today
        );
      })
      .filter((item) => {
        return [
          "exam",
          "assignment",
          "school"
        ].includes(item.category);
      })
      .sort((first, second) => {
        return (
          parseDate(first.start) -
          parseDate(second.start)
        );
      })[0] || null
  );
}

function renderUpcoming() {
  const today = stripTime(new Date());

  const upcoming = getAllEvents()
    .filter((item) => {
      return (
        parseDate(
          item.end || item.start
        ) >= today
      );
    })
    .sort((first, second) => {
      return (
        parseDate(first.start) -
        parseDate(second.start)
      );
    })
    .slice(0, 6);

  elements.upcomingList.innerHTML = "";

  if (upcoming.length === 0) {
    elements.upcomingList.innerHTML = `
      <div class="dday-empty">
        다가오는 일정이 없습니다.
      </div>
    `;

    return;
  }

  upcoming.forEach((item) => {
    const difference =
      daysBetween(
        today,
        parseDate(item.start)
      );

    const row =
      document.createElement("article");

    row.className = "upcoming-item";

    row.innerHTML = `
      <div class="upcoming-dday">
        ${formatDday(difference)}
      </div>

      <button type="button">
        <strong>
          ${escapeHtml(item.title)}
        </strong>

        <span>
          ${formatShortDate(item)}
          ·
          ${CATEGORY_LABELS[item.category]}
        </span>
      </button>
    `;

    row
      .querySelector("button")
      .addEventListener("click", () => {
        showDetail(item);
      });

    elements.upcomingList.appendChild(row);
  });
}

function openAddModal(dateKey) {
  elements.eventStartInput.value =
    dateKey;

  elements.eventEndInput.value =
    dateKey;

  openModal(elements.addModal);

  setTimeout(() => {
    elements.eventTitleInput.focus();
  }, 80);
}

function addCustomEvent(event) {
  event.preventDefault();

  const title =
    elements.eventTitleInput.value.trim();

  const start =
    elements.eventStartInput.value;

  const end =
    elements.eventEndInput.value;

  const category =
    elements.eventCategoryInput.value;

  const description =
    elements.eventDescriptionInput.value.trim();

  if (!title || !start || !end) {
    showToast(
      "일정 이름과 날짜를 입력해 주세요."
    );

    return;
  }

  if (end < start) {
    showToast(
      "종료 날짜는 시작 날짜보다 빠를 수 없습니다."
    );

    return;
  }

  customEvents.push({
    id: `custom-${Date.now()}`,
    title,
    start,
    end,
    category,
    description,
    source: "custom"
  });

  saveCustomEvents();

  elements.addEventForm.reset();

  closeModal(elements.addModal);

  shownMonth = startOfMonth(
    parseDate(start)
  );

  renderAll();

  showToast(
    "일정이 저장되었습니다."
  );
}

function showDetail(item) {
  const isSelected =
    selectedDdayId === item.id;

  elements.detailTitle.textContent =
    item.title;

  elements.detailBody.innerHTML = `
    <span
      class="detail-category"
      data-category="${item.category}"
    >
      ${
        CATEGORY_LABELS[item.category] ||
        "일정"
      }
    </span>

    <p class="detail-date">
      ${formatEventDate(item)}
    </p>

    <p class="detail-description">
      ${escapeHtml(
        item.description ||
        "등록된 추가 설명이 없습니다."
      )}
    </p>

    <div class="detail-actions">
      <button
        id="setDdayButton"
        class="dday-button"
        type="button"
      >
        ${
          isSelected
            ? "D-DAY 해제"
            : "이 일정으로 D-DAY 설정"
        }
      </button>

      ${
        item.source === "custom"
          ? `
            <button
              id="deleteEvent"
              class="delete-button"
              type="button"
            >
              이 일정 삭제
            </button>
          `
          : ""
      }
    </div>
  `;

  document
    .querySelector("#setDdayButton")
    .addEventListener("click", () => {
      if (isSelected) {
        selectedDdayId = "";

        localStorage.removeItem(
          "chiak-selected-dday"
        );

        showToast(
          "D-DAY가 해제되었습니다."
        );
      } else {
        selectedDdayId = item.id;

        localStorage.setItem(
          "chiak-selected-dday",
          selectedDdayId
        );

        showToast(
          "D-DAY가 설정되었습니다."
        );
      }

      closeModal(elements.detailModal);
      renderDday();
    });

  const deleteButton =
    document.querySelector(
      "#deleteEvent"
    );

  if (deleteButton) {
    deleteButton.addEventListener(
      "click",
      () => {
        customEvents =
          customEvents.filter(
            (eventItem) => {
              return eventItem.id !== item.id;
            }
          );

        if (selectedDdayId === item.id) {
          selectedDdayId = "";

          localStorage.removeItem(
            "chiak-selected-dday"
          );
        }

        saveCustomEvents();

        closeModal(
          elements.detailModal
        );

        renderAll();

        showToast(
          "일정이 삭제되었습니다."
        );
      }
    );
  }

  openModal(elements.detailModal);
}

function askAssistant(question) {
  appendMessage(question, "user");

  const answer =
    createAssistantAnswer(question);

  setTimeout(() => {
    appendMessage(
      answer,
      "assistant"
    );
  }, 160);
}

function createAssistantAnswer(question) {
  const query = question
    .replace(/\s+/g, " ")
    .trim();

  const today = stripTime(new Date());

  if (
    /(디데이|d-day|D-DAY)/i.test(
      query
    )
  ) {
    const target =
      getAllEvents().find((item) => {
        return (
          item.id === selectedDdayId
        );
      }) ||
      getAutomaticDdayEvent();

    if (!target) {
      return "현재 표시할 D-DAY 일정이 없습니다.";
    }

    const difference =
      daysBetween(
        today,
        parseDate(target.start)
      );

    return (
      `${target.title}은(는) ` +
      `${formatDday(difference)}입니다.\n` +
      `${formatEventDate(target)}`
    );
  }

  let candidates = getAllEvents();

  let rangeStart = today;
  let rangeEnd = addDays(today, 60);
  let rangeLabel = "앞으로";
  let hasSpecificRange = false;

  if (query.includes("오늘")) {
    rangeStart = today;
    rangeEnd = today;
    rangeLabel = "오늘";
    hasSpecificRange = true;
  } else if (query.includes("내일")) {
    rangeStart = addDays(today, 1);
    rangeEnd = rangeStart;
    rangeLabel = "내일";
    hasSpecificRange = true;
  } else if (
    query.includes("다음 주") ||
    query.includes("다음주")
  ) {
    rangeStart =
      startOfNextWeek(today);

    rangeEnd =
      addDays(rangeStart, 6);

    rangeLabel = "다음 주";
    hasSpecificRange = true;
  } else if (
    query.includes("이번 주") ||
    query.includes("이번주")
  ) {
    rangeStart =
      startOfWeekSunday(today);

    rangeEnd =
      addDays(rangeStart, 6);

    rangeLabel = "이번 주";
    hasSpecificRange = true;
  } else if (
    query.includes("이번 달") ||
    query.includes("이번달")
  ) {
    rangeStart =
      startOfMonth(today);

    rangeEnd = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    );

    rangeLabel = "이번 달";
    hasSpecificRange = true;
  } else {
    const monthMatch =
      query.match(/(\d{1,2})월/);

    if (monthMatch) {
      const month =
        Number(monthMatch[1]) - 1;

      let year =
        today.getFullYear();

      if (
        month <
        today.getMonth() - 2
      ) {
        year += 1;
      }

      rangeStart =
        new Date(year, month, 1);

      rangeEnd =
        new Date(year, month + 1, 0);

      rangeLabel =
        `${year}년 ${month + 1}월`;

      hasSpecificRange = true;
    }
  }

  if (
    /(시험|고사|학력평가|모의평가|평가)/.test(
      query
    )
  ) {
    candidates =
      candidates.filter((item) => {
        return item.category === "exam";
      });
  } else if (
    /(수행|과제|제출|준비물)/.test(
      query
    )
  ) {
    candidates =
      candidates.filter((item) => {
        return (
          item.category ===
          "assignment"
        );
      });
  } else if (
    query.includes("동아리")
  ) {
    candidates =
      candidates.filter((item) => {
        return item.category === "club";
      });
  } else if (
    /(방학|공휴일|휴일|연휴)/.test(
      query
    )
  ) {
    candidates =
      candidates.filter((item) => {
        return (
          item.category ===
          "holiday"
        );
      });
  } else if (
    /(회의|상담)/.test(query)
  ) {
    candidates =
      candidates.filter((item) => {
        return (
          item.category ===
          "meeting"
        );
      });
  }

  const asksNext =
    /(다음|가장 가까운|언제)/.test(
      query
    );

  if (
    asksNext &&
    !hasSpecificRange
  ) {
    candidates = candidates
      .filter((item) => {
        return (
          parseDate(
            item.end || item.start
          ) >= today
        );
      })
      .sort((first, second) => {
        return (
          parseDate(first.start) -
          parseDate(second.start)
        );
      })
      .slice(0, 1);

    rangeLabel = "가장 가까운";
  } else {
    candidates = candidates
      .filter((item) => {
        const itemStart =
          parseDate(item.start);

        const itemEnd =
          parseDate(
            item.end || item.start
          );

        return (
          itemStart <= rangeEnd &&
          itemEnd >= rangeStart
        );
      })
      .sort((first, second) => {
        return (
          parseDate(first.start) -
          parseDate(second.start)
        );
      })
      .slice(0, 8);
  }

  if (candidates.length === 0) {
    return (
      `${rangeLabel} 조건에 맞는 ` +
      `등록 일정이 없습니다.`
    );
  }

  const lines =
    candidates.map((item) => {
      const difference =
        daysBetween(
          today,
          parseDate(item.start)
        );

      return (
        `• ${formatShortDate(item)}  ` +
        `${item.title} ` +
        `(${formatDday(difference)})`
      );
    });

  return (
    `${rangeLabel} 일정입니다.\n` +
    lines.join("\n")
  );
}

function appendMessage(text, role) {
  const message =
    document.createElement("div");

  message.className =
    `message ${
      role === "user"
        ? "user-message"
        : "assistant-message"
    }`;

  message.textContent = text;

  elements.chatLog.appendChild(
    message
  );

  elements.chatLog.scrollTop =
    elements.chatLog.scrollHeight;
}

function applySavedTheme() {
  const savedTheme =
    localStorage.getItem(
      "chiak-calendar-theme"
    ) || "red";

  setTheme(savedTheme, false);
}

function setTheme(
  theme,
  save = true
) {
  const allowedThemes = [
    "red",
    "navy",
    "forest",
    "purple",
    "coral",
    "charcoal"
  ];

  const selectedTheme =
    allowedThemes.includes(theme)
      ? theme
      : "red";

  if (selectedTheme === "red") {
    document.documentElement
      .removeAttribute("data-theme");
  } else {
    document.documentElement
      .dataset.theme = selectedTheme;
  }

  document
    .querySelectorAll(
      ".theme-tab[data-theme]"
    )
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.theme ===
          selectedTheme
      );
    });

  const bannerColor =
    getComputedStyle(
      document.documentElement
    )
      .getPropertyValue("--banner")
      .trim();

  document
    .querySelector(
      'meta[name="theme-color"]'
    )
    .setAttribute(
      "content",
      bannerColor
    );

  if (save) {
    localStorage.setItem(
      "chiak-calendar-theme",
      selectedTheme
    );
  }
}

function loadMemo() {
  elements.memoInput.value =
    localStorage.getItem(
      "chiak-class-memo"
    ) || "";

  updateMemoCount();

  const savedTime =
    localStorage.getItem(
      "chiak-class-memo-time"
    );

  elements.memoSavedAt.textContent =
    savedTime
      ? `${savedTime} 저장`
      : "자동 저장";
}

function saveMemo() {
  localStorage.setItem(
    "chiak-class-memo",
    elements.memoInput.value
  );

  const time =
    new Intl.DateTimeFormat(
      "ko-KR",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }
    ).format(new Date());

  localStorage.setItem(
    "chiak-class-memo-time",
    time
  );

  elements.memoSavedAt.textContent =
    `${time} 저장`;

  updateMemoCount();
}

function updateMemoCount() {
  elements.memoCount.textContent =
    `${elements.memoInput.value.length} / 2000`;
}

function getAllEvents() {
  return [
    ...academicEvents,
    ...customEvents
  ];
}

function schedule(
  start,
  title,
  category,
  end = start,
  description = ""
) {
  return {
    id: `school-${start}-${title}`,
    start,
    end,
    title,
    category,
    description,
    source: "school"
  };
}

function intersects(
  item,
  rangeStart,
  rangeEnd
) {
  const itemStart =
    parseDate(item.start);

  const itemEnd =
    parseDate(
      item.end || item.start
    );

  return (
    itemStart <= rangeEnd &&
    itemEnd >= rangeStart
  );
}

function eventLength(item) {
  return daysBetween(
    parseDate(item.start),
    parseDate(
      item.end || item.start
    )
  );
}

function formatEventDate(item) {
  const start =
    parseDate(item.start);

  const end =
    parseDate(
      item.end || item.start
    );

  const startText =
    new Intl.DateTimeFormat(
      "ko-KR",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    ).format(start);

  if (item.start === item.end) {
    return startText;
  }

  const endText =
    new Intl.DateTimeFormat(
      "ko-KR",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    ).format(end);

  return `${startText} ~ ${endText}`;
}

function formatShortDate(item) {
  const start =
    parseDate(item.start);

  const end =
    parseDate(
      item.end || item.start
    );

  const startText =
    `${start.getMonth() + 1}.` +
    `${String(
      start.getDate()
    ).padStart(2, "0")}`;

  if (item.start === item.end) {
    return startText;
  }

  const endText =
    `${end.getMonth() + 1}.` +
    `${String(
      end.getDate()
    ).padStart(2, "0")}`;

  return `${startText}~${endText}`;
}

function formatDday(difference) {
  if (difference === 0) {
    return "D-DAY";
  }

  if (difference > 0) {
    return `D-${difference}`;
  }

  return `D+${Math.abs(difference)}`;
}

function openModal(modal) {
  modal.classList.add("open");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";
}

function closeModal(modal) {
  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  if (
    !document.querySelector(
      ".modal.open"
    )
  ) {
    document.body.style.overflow =
      "";
  }
}

function showToast(message) {
  clearTimeout(toastTimer);

  elements.toast.textContent =
    message;

  elements.toast.classList.add(
    "show"
  );

  toastTimer = setTimeout(() => {
    elements.toast.classList.remove(
      "show"
    );
  }, 2400);
}

function loadCustomEvents() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(
        "chiak-calendar-events"
      ) || "[]"
    );

    return Array.isArray(saved)
      ? saved
      : [];
  } catch (error) {
    console.error(
      "저장된 일정을 불러오지 못했습니다.",
      error
    );

    return [];
  }
}

function saveCustomEvents() {
  localStorage.setItem(
    "chiak-calendar-events",
    JSON.stringify(customEvents)
  );
}

function parseDate(dateString) {
  const [year, month, day] =
    dateString
      .split("-")
      .map(Number);

  return new Date(
    year,
    month - 1,
    day
  );
}

function formatDateKey(date) {
  const year =
    date.getFullYear();

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      date.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function stripTime(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
}

function startOfMonth(date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  );
}

function startOfWeekSunday(date) {
  const result = stripTime(date);

  result.setDate(
    result.getDate() - result.getDay()
  );

  return result;
}

function startOfNextWeek(date) {
  return addDays(
    startOfWeekSunday(date),
    7
  );
}

function addDays(date, amount) {
  const result =
    new Date(date);

  result.setDate(
    result.getDate() + amount
  );

  return stripTime(result);
}

function daysBetween(
  firstDate,
  secondDate
) {
  const first =
    stripTime(firstDate);

  const second =
    stripTime(secondDate);

  return Math.round(
    (second - first) / 86400000
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}